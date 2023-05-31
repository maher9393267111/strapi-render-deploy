module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('maher9911133'),
          api_key: env( "442715196852148"),
          api_secret: env('zFL1FnOG0PD64fdyyVa-8g5cs1s'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });