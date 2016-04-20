module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'js/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    plugins: [
                        (new (require('less-plugin-clean-css'))({
                            advanced: true,
                            compatibility: 'ie8'
                        }))
                    ]
                },
                files: {
                    "css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less"
                }
            },
            custom: {
                options: {
                    paths: ["css"],
                    plugins: [
                        (new (require('less-plugin-clean-css'))({
                            advanced: true,
                            compatibility: 'ie8'
                        }))
                    ],
                    modifyVars: {
                        'theme-primary': grunt.option('theme-primary')
                    }
                },
                files: {
                    "css/<%= pkg.name %>.custom.min.css": "less/<%= pkg.name %>.less"
                }
            }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        },
        copy: {
            'bootstrap': {
                files: [
                    { expand: true, cwd: 'node_modules/bootstrap/dist', src: ['css/bootstrap.*.css', 'fonts/*', 'js/*', '!js/npm.js'], dest: '.' },
                ],
            },
            'font-awesome': {
                files: [
                    { expand: true, cwd: 'node_modules/font-awesome', src: ['css/*', 'fonts/*', 'less/*', 'scss/*'], dest: 'font-awesome/' },
                ],
            },
            'jquery': {
                files: [
                    { expand: true, cwd: 'node_modules/jquery/dist', src: ['jquery.js'], dest: 'js/' },
                ],
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less:expanded', 'less:minified', 'usebanner']);
    grunt.registerTask('custom', ['less:custom']);
};