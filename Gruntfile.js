module.exports = function( grunt ) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'nested', //nested compressed
                },
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        /* autoprefixer: {
            dist: {
                options: {
                    map: true
                },
                files: {
                    'css/main.css': 'css/autoprefixable.css'
                }
            }
        }, */
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            /* styles: {
                files: ['css/autoprefixable.css'],
                tasks: ['autoprefixer']
            } */
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    /* grunt.loadNpmTasks('grunt-autoprefixer'); */

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.

};