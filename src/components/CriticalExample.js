import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';

const getCritical = Array.from(document.styleSheets).filter((sheet) => { try { sheet.cssRules; return true; } catch (err) { console.log(`Due to CORS issues, this script can't access "${sheet.href}"`); return false; }}).map((sheet) => Array.from(sheet.cssRules).map((rule) => rule.type === rule.FONT_FACE_RULE ? rule.cssText : rule.type === rule.STYLE_RULE ? Array.from(document.querySelectorAll(rule.selectorText)).some((node) => node.getBoundingClientRect().top < (window.innerHeight / 3) && window.getComputedStyle(node).display !== 'none') ? rule.cssText : null : rule.type === rule.MEDIA_RULE ? `@media ${rule.conditionText} {${Array.from(rule.cssRules).map((mediaRule) => mediaRule.type === mediaRule.FONT_FACE_RULE ? mediaRule.cssText : mediaRule.type === mediaRule.STYLE_RULE ? Array.from(document.querySelectorAll(mediaRule.selectorText)).some((node) => node.getBoundingClientRect().top < window.innerHeight && window.getComputedStyle(node).display !== 'none') ? mediaRule.cssText : null : null).filter((mediaRule) => mediaRule != null).join(' ')}}` : null)).flat().filter((rule) => rule != null && !new RegExp(/^@media.*{}$/).test(rule)).join(' ');

function trimString(string) {
  let idx = string.length / 2;
  while (idx < string.length && string[idx].match(/\s/) == null)
    idx++;

  return `${string.substring(0, idx)}...`;
}

export default function CriticalExample() {
  return (
    <BrowserOnly>
      <CodeBlock language="css">{trimString(getCritical)}</CodeBlock>
    </BrowserOnly>
  )
}
