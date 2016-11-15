<app>
    <article>
        <button onclick={ bip } type="submit">Say something</button>
        <input value={ myVal } if={ myVal } type="text">
    </article>

    <script>
        this.myVal = ''

        this.bip = () => {
            this.update({myVal: 'Hello!'})
            opts.riotControl.trigger('my-event')
        }
    </script>

</app>

