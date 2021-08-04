---
sidebar_position: 1
---

# Cloudinary

## Cloudinary Image Upload

[Cloudinary](https://cloudinary.com/) is an end-to-end image and video management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery. As [Kubix Media](https://kubixmedia.co.uk/) are Cloudinary partners, Kubi can connect with and automatically upload new images to a Cloudinary account.

>**Note**: Before setting up a Cloudinary account discuss with the client their image and/or video needs for their website. Once discussed arrange what plan will be best for them as video sizes are capped on the free version.

### Example Cloudinary upload settings

```yaml
cloudinary:
  account:
    name: "kubix-media-ltd"
    key: "647661886982969"
    secret: "7J2fGvoofQWzzRzzgZdqeUqlIlY"
  dest: "config"
  manifest: "config/cloudinary-manifest.json"
  merge: false
  src: "src/images/*"
  url: "https://res.cloudinary.com/kubix-media-ltd/image/upload/c_scale,f_auto,fl_lossy.progressive,w_auto,dpr_auto/"
```

When uploading to Cloudinary's cloud an asset manifest for mapping the original images to Cloudinary's upload response is created. This data can be consumed by other plugins and is particularly useful in conjunction with templating languages. By default, `cloudinary-manifest.json` will be replaced as a whole. To merge with an existing manifest, change the key merge to true: `merge: true`. To update the default configuration you can find the settings within the `gulp.config.yml` file.

#### Example manifest, after uploading cat.png and dog.jpg:

```json
{
  "cat.png": {
    "public_id": "cat",
    "version": 1528013000,
    "signature": "f420ed5e038d34777c4b0468750c3076860e89dd",
    "width": 1200,
    "height": 800,
    "format": "png",
    "resource_type": "image",
    "created_at": "2018-06-03T08:03:20Z",
    "tags": [],
    "bytes": 7890,
    "type": "upload",
    "etag": "3ccfc4c5eac57349ab827b5c9ac87d69",
    "placeholder": false,
    "url": "http://res.cloudinary.com/demo/image/upload/v1528013000/cat.png",
    "secure_url": "https://res.cloudinary.com/demo/image/upload/v1528013000/cat.png",
    "original_filename": "cat"
  },
  "dog.jpg": {
    "public_id": "dog",
    "version": 1528011592,
    "signature": "0a6a7e4d3e551d6701f5976f115600ee37d2271f",
    "width": 1920,
    "height": 1080,
    "format": "jpg",
    "resource_type": "image",
    "created_at": "2018-06-03T08:03:32Z",
    "tags": [],
    "bytes": 12045,
    "type": "upload",
    "placeholder": false,
    "url": "http://res.cloudinary.com/demo/image/upload/v1528011592/dog.jpg",
    "secure_url": "https://res.cloudinary.com/demo/image/upload/v1528011592/dog.jpg",
    "original_filename": "dog"
  }
}
```

Once configured with the account object parameters and manifest-path, Kubi will automatically push any image placed within the root of the folder `src/images`.

>**Note**: The `url` parameter of the Cloudinary settings is a coming soon feature where Kubi will replace the image URL used within the theme with the Cloudinary one.

In conjunction with Kubi's Cloudinary upload, it is recommended to integrate Cloudinary into the theme, so when images and/or videos are added to Shopify's servers they are automatically uploaded to Cloudinary and the URLs are replaced from Shopify's to Cloudinary's. For more information see: [How to Improve Your Shopify’s Store Loading Times using Cloudinary](https://cloudinary.com/blog/how_to_improve_your_shopify_s_store_loading_times_using_cloudinary).