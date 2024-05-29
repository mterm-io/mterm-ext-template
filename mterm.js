module.exports = {
    RUNNER_THEME_CSS: `/********** CSS SENT TO THE RUNNER **********/`,
    EXT_POST_INSTALL: (context) => {
        context.out('Extension <b>installed</b>, here is how you can use it!\n')
        context.out('<li>')
        context.out('   <li>Type <b>clock</b> to see a clock!</li>')
        context.out('   <li>Type <b>add_this_command</b> to see something amazing!</li>')
        context.out('   <li>Type <b>add_that_command</b> to see something more amazing!</li>')
        context.out('   <li>Type <b>add_another_command</b> to see something simple!</li>')
        context.out('</li>')
    },
    COMMANDS: () => {
        return {
            'add_this_command': {
                description: 'add_this_command does something amazing!',
                exec() {
                    return 'something amazing!'
                }
            },
            'add_that_command': {
                description: 'add_that_command does something more amazing!',
                async exec(arg_1 = 'nothing provided to add_that_command') {
                    await Promise.resolve(true) // example of async magic

                    return `something more amazing: '${arg_1}'!`
                }
            },
            'add_another_command': {
                description: 'add_another_command does something simple!',
                exec() {
                    this.context.out('something simple!')
                    setTimeout(() => {
                        this.context.out('something simple finally finished, after 1 second!')
                        this.context.finish() // finish the command, provide an error code if needed
                    }, 1000)
                    // no return: this command will run until the context.finish() is called
                }
            },
            'clock': {
                description: 'clock is a clock!',
                exec() {
                    const T = this.context.content('<span>000</span>')

                    let second = 0

                    setInterval(() => {
                        // update the content of the element every second
                        T.update(`<span>${`${second}`.padStart(3, '0')}</span>`)
                    }, 1000)
                    return false
                }
            },
        }
    }
}