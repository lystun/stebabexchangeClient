export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Stebab Exchange | Buy, Sell all volumes of cryptocurrency at the best market rate',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'Stebab Xchange is a cryptocurrency company that buys all volumes of bitcoin and other altcoins at the best rate in the market.', content: 'Stebab Xchange is a cryptocurrency company that buys all volumes of bitcoin and other altcoins at the best rate in the market.' },
            { name: "author", content: "Lystun Tech" }  
        ],
        
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" },
        ],

        script : [
            { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", },
            { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", },
            
            { src: "/js/purpose.core.js" },
            { src: "/libs/swiper/dist/js/swiper.js" },
            { src: "/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.js" },
            { src: "/js/purpose.js" },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/libs/@fortawesome/fontawesome-free/css/all.min.css',
        '~/assets/libs/swiper/dist/css/swiper.min.css',
        '~/assets/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
        '~/assets/css/purpose-blue-light.css',
        '~/assets/css/main.css',
    ],

    router: {
        middleware: [
            'clearValidationErrors',
        ]
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/vue-typed.js' },
        { src: '~/plugins/v-clipboard.js' },
        { src: '~/plugins/axios.js' },
        { src: '~/plugins/mixins/user.js' },
        { src: '~/plugins/mixins/validation.js' },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/toast',
        '@nuxtjs/style-resources',
        [ 
            'nuxt-sweetalert2', 
            {
                confirmButtonColor : '#f72585',
                cancelButtonColor : '#273344',
            }
        
        ],
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL : "http://127.0.0.1:8080/api/v1",
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/users/login', method: 'post', propertyName: 'token' },
                    // logout: { url: '/users/logout', method: 'post' },
                    user: { url: '/users/me', method: 'get', propertyName: 'data' },
                },
            }
        },
        
        redirect: false
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {

    },

    pageTransition: 'page',

    loading: {
        color: '#fff',
        height: '2px'
    },

    styleResources: {
        scss: [
            '~assets/scss/*.scss',
        ],
    },

    toast: {
        duration: '10000',
        iconPack: 'fontawesome'
    }

}
