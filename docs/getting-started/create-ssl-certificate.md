---
sidebar_position: 4
---

# Create a self-signed certificate

Kubi uses [BrowserSync](https://browsersync.io/) to provide live reloading of the remote Shopify store in conjunction with your local changes. It's a good idea to create a trusted, self-signed SSL certificate on your device so the assets, served via `https`, are never blocked. It will also help to avoid this:

<img src="https://res.cloudinary.com/kubix-media-ltd/image/upload/c_scale,dpr_auto,f_auto,fl_progressive,w_auto/Kubi%20Docs/sslerror.png" alt="An example of Chrome warning you of an untrusted https certificate"/><br/>

>**Note**: If you have run the [Kubi script](https://github.com/kubixmedia/kubi/wiki/2.Create-a-new-Kubi-project) the SSL key and cert files will have already been created for you and added to the `gulp.config.yml` file.

1. Run the following commands to install [mkcert](https://github.com/FiloSottile/mkcert). See the [installation docs](https://github.com/FiloSottile/mkcert#installation) for more details.

```
brew install mkcert nss
```

2. Copy and paste the bash function into your terminal (or into your `~/.bash_profile` or your desired shell file if you want to have it available in the future):

```bash
function ssl-check() {
    f="$HOME/.ssl";
    ssl_crt="$f/server.crt"
    ssl_key="$f/server.key"
    b=$(tput bold)
    c=$(tput sgr0)

    local_ip=$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}'))
    # local_ip=999.999.999 # (uncomment for testing)

    domains=(
        "localhost"
        "$local_ip"
    )

    if [[ ! -f $ssl_crt ]]; then
        echo -e "\n🛑  ${b}Couldn't find a SSL certificate:${c}"
        make_key=true
    elif [[ ! $(openssl x509 -noout -text -in $ssl_crt | grep $local_ip) ]]; then
        echo -e "\n🛑  ${b}Your IP Address has changed:${c}"
        make_key=true
    else
        echo -e "\n✅  ${b}Your IP address is still the same.${c}"
    fi

    if [[ $make_key == true ]]; then
        echo -e "Generating a new SSL certificate...\n"
        count=$(( ${#domains[@]} - 1))
        mkcert ${domains[@]}

        # Create a .ssl directory if it doesn't exist.
        test ! -d $f && mkdir $f

        # It appears mkcert bases its filenames off the number of domains passed after the first one.
        # This script predicts that filename, so it can copy it to the .ssl directory.
        if [[ $count = 0 ]]; then
            mv ./localhost.pem $ssl_crt
            mv ./localhost-key.pem $ssl_key
        else
            mv ./localhost+$count.pem $ssl_crt
            mv ./localhost+$count-key.pem $ssl_key
        fi
    fi
}
```
3. Run the function you just declared in step 2:

```
ssl-check
```

4. You will now need to add the path locations for the SSL key and certificate to Kubi via the `gulp.config.yml` file. By default they are set to null and are located within the BrowserSync settings.

```yml
browsersync:
  debug: true
  notify: true
  open: false
  port: 3000
  preferences:
    clicks: false
    scroll: false
  ssl:
    key: null
    cert: null
```

5. You now have successfully created a local, self-signed SSL certificate for developing with Kubi!

### Common mistakes

Even after performing the above steps, you might encounter the following errors and warnings when using Kubi:

An example of Chrome warning you of an untrusted https certificate
<img src="https://res.cloudinary.com/kubix-media-ltd/image/upload/c_scale,dpr_auto,f_auto,fl_progressive,w_auto/Kubi%20Docs/sslerror.png" alt="An example of Chrome warning you of an untrusted https certificate"/>

This is most likely because your local IP has changed and the self-signed SSL certificate you created is no longer valid. To remove these warnings and errors, simply repeat steps 2 and 3 above to regenerate a new self-signed certificate.
