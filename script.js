Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        theme: 'default',
        transition: 'default',
        math: {
                mathjax: 'https://cdn.mathjax.org/mathjax/latest/MathJax.js',
                config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html
        },
        dependencies: [
                { src: 'https://cdn.jsdelivr.net/reveal.js/3.0.0/plugin/math/math.js', async: true }
        ]
})
