module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',

        uglify: {
            main: {
                src: 'src/js/<%= pkg.name %>.js',
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },

        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "build/css/<%= pkg.name %>.css": "src/less/<%= pkg.name %>.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "build/css/<%= pkg.name %>.min.css": "src/less/<%= pkg.name %>.less"
                }
            }
        },
       
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: [
                        'build/css/<%= pkg.name %>.css', 
                        'build/css/<%= pkg.name %>.min.css', 
                        'build/js/<%= pkg.name %>.min.js'
                        ]
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['src/**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        },

        copy: {
          libs: {
            expand: true,
            cwd: 'src',
            src: [
                'libs/**/*',
                'img/**/*'
                ],
            dest: 'build/',
          },
        },

        htmlmin: {                                     
            dist: {                                     
              options: {                                
                removeComments: false,
                collapseWhitespace: true
              },
              files: {                              
                'build/index.html': 'src/index.html'
              }
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'copy','htmlmin','less', 'usebanner']);

};