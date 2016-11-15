module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        shell: {
            tsc: {
                command: 'tsc --watch',
                options: {
                    async: true
               }
            },
            riot: {
                command: 'riot src/tags build/tags.js -w', //  --type typescript
                options: {
                    async: true
                }
            },
            // runtests: {
            //     command: 'npm test --force',
            //     options: {
            //         async: true
            //     }
            // },
            electron: {
                command: 'NODE_ENV=devlopment npm start',
                options: {
                    async: false
                }
            },
            options: {
                stdout: true,
                stderr: true,
                failOnError: true
            }
        }

    });

    grunt.registerTask('default', ['shell']);
};
