var override = '$color-text-default: red;\n'
+'$color-text-link:red;'
+'$color-text-link-active:red;'
+'$color-text-tab-label-active:red;\n'
+'$color-text-action-label-active:red;\n'
+'$color-border:red;\n'
+'$color-border-brand:red;\n'
+'$color-text-button-default:red;\n'
+'$color-text-tab-label-selected:red;\n'
+'$color-text-button-default-active:red;\n';

$.post("/brand",
    {
        designFile: 'index-ltng.scss',
        override: override
    },
    function(cssFile, status){
       $('body').append('<link rel="stylesheet" type="text/css" href="'+cssFile+'">');

    });