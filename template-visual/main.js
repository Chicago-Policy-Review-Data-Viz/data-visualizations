// For API and chart documentation please look here:
// https://www.amcharts.com/demos/
am5.ready(function () {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new('chart-div');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    // Setting themes and default colors
    var cprTheme = am5.Theme.new(root);
    cprTheme
        .rule('ColorSet')
        .set('colors', [
            am5.color('#800000'),
            am5.color('#767676'),
            am5.color('#FFA319'),
            am5.color('#C16622'),
            am5.color('#8F3931'),
            am5.color('#8A9045'),
            am5.color('#58593F'),
            am5.color('#155F83'),
            am5.color('#350E20')
        ]);

    root.setThemes([am5themes_Animated.new(root), cprTheme]);

    // All code for your chart goes here
});
