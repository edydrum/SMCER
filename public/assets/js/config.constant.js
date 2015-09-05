'use strict';

/**
 * Config constant
 */
app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Javascript Plugins
        'modernizr': ['vendor/components-modernizr/modernizr.js'],
        'moment': ['vendor/moment/min/moment.min.js'],
        'spin': 'vendor/spin.js/spin.js',

        //*** jQuery Plugins
        'perfect-scrollbar-plugin': ['vendor/perfect-scrollbar/js/min/perfect-scrollbar.jquery.min.js', 'vendor/perfect-scrollbar/css/perfect-scrollbar.min.css'],
        'ladda': ['vendor/ladda/dist/ladda.min.js', 'vendor/ladda/dist/ladda-themeless.min.css'],
        'sweet-alert': ['vendor/sweetalert/lib/sweet-alert.min.js', 'vendor/sweetalert/lib/sweet-alert.css'],
        'chartjs': 'vendor/chartjs/Chart.min.js',
        'jquery-sparkline': 'vendor/jquery.sparkline.build/dist/jquery.sparkline.min.js',
        'ckeditor-plugin': 'vendor/ckeditor/ckeditor.js',
        'jquery-nestable-plugin': ['vendor/jquery-nestable/jquery.nestable.js'],
        'touchspin-plugin': ['vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js', 'vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],

        //*** Controllers
        'authCtrl' : 'assets/js/controllers/SMCER/authCtrl.js',
        'userCtrl' : 'assets/js/controllers/SMCER/userCtrl.js',
        'dashboardCtrl': 'assets/js/controllers/dashboardCtrl.js',
        'iconsCtrl': 'assets/js/controllers/iconsCtrl.js',
        'vAccordionCtrl': 'assets/js/controllers/vAccordionCtrl.js',
        'ckeditorCtrl': 'assets/js/controllers/ckeditorCtrl.js',
        'laddaCtrl': 'assets/js/controllers/laddaCtrl.js',
        'ngTableCtrl': 'assets/js/controllers/ngTableCtrl.js',
        'cropCtrl': 'assets/js/controllers/cropCtrl.js',
        'asideCtrl': 'assets/js/controllers/asideCtrl.js',
        'toasterCtrl': 'assets/js/controllers/toasterCtrl.js',
        'sweetAlertCtrl': 'assets/js/controllers/sweetAlertCtrl.js',
        'mapsCtrl': 'assets/js/controllers/mapsCtrl.js',
        'chartsCtrl': 'assets/js/controllers/chartsCtrl.js',
        'calendarCtrl': 'assets/js/controllers/calendarCtrl.js',
        'nestableCtrl': 'assets/js/controllers/nestableCtrl.js',
        'validationCtrl': ['assets/js/controllers/validationCtrl.js'],
        'user_Ctrl': ['assets/js/controllers/userCtrl.js'],
        'selectCtrl': 'assets/js/controllers/selectCtrl.js',
        'wizardCtrl': 'assets/js/controllers/wizardCtrl.js',
        'uploadCtrl': 'assets/js/controllers/uploadCtrl.js',
        'treeCtrl': 'assets/js/controllers/treeCtrl.js',
        'inboxCtrl': 'assets/js/controllers/inboxCtrl.js',
        'xeditableCtrl': 'assets/js/controllers/xeditableCtrl.js',
        'chatCtrl': 'assets/js/controllers/chatCtrl.js',
        
        //*** Filters
        'htmlToPlaintext': 'assets/js/filters/htmlToPlaintext.js',
        
        //*** Services
        'interceptor' : 'assets/js/services/InterceptorService.js',
    },
    //*** angularJS Modules
    modules: [{
        name: 'angularMoment',
        files: ['vendor/angular-moment/angular-moment.min.js']
    }, {
        name: 'toaster',
        files: ['vendor/AngularJS-Toaster/toaster.js', 'vendor/AngularJS-Toaster/toaster.css']
    }, {
        name: 'angularBootstrapNavTree',
        files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js', 'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']
    }, {
        name: 'angular-ladda',
        files: ['vendor/angular-ladda/dist/angular-ladda.min.js']
    }, {
        name: 'ngTable',
        files: ['vendor/ng-table/dist/ng-table.min.js', 'vendor/ng-table/dist/ng-table.min.css']
    }, {
        name: 'ui.select',
        files: ['vendor/angular-ui-select/dist/select.min.js', 'vendor/angular-ui-select/dist/select.min.css', 'vendor/select2/dist/css/select2.min.css', 'vendor/select2-bootstrap-css/select2-bootstrap.min.css', 'vendor/selectize/dist/css/selectize.bootstrap3.css']
    }, {
        name: 'ui.mask',
        files: ['vendor/angular-ui-utils/mask.min.js']
    }, {
        name: 'ngImgCrop',
        files: ['vendor/ngImgCrop/compile/minified/ng-img-crop.js', 'vendor/ngImgCrop/compile/minified/ng-img-crop.css']
    }, {
        name: 'angularFileUpload',
        files: ['vendor/angular-file-upload/angular-file-upload.min.js']
    }, {
        name: 'ngAside',
        files: ['vendor/angular-aside/dist/js/angular-aside.min.js', 'vendor/angular-aside/dist/css/angular-aside.min.css']
    }, {
        name: 'truncate',
        files: ['vendor/angular-truncate/src/truncate.js']
    }, {
        name: 'oitozero.ngSweetAlert',
        files: ['vendor/angular-sweetalert-promised/SweetAlert.min.js']
    }, {
        name: 'monospaced.elastic',
        files: ['vendor/angular-elastic/elastic.js']
    }, {
        name: 'ngMap',
        files: ['vendor/ngmap/build/scripts/ng-map.min.js']
    }, {
        name: 'tc.chartjs',
        files: ['vendor/tc-angular-chartjs/dist/tc-angular-chartjs.min.js']
    }, {
        name: 'flow',
        files: ['vendor/ng-flow/dist/ng-flow-standalone.min.js']
    }, {
        name: 'uiSwitch',
        files: ['vendor/angular-ui-switch/angular-ui-switch.min.js', 'vendor/angular-ui-switch/angular-ui-switch.min.css']
    }, {
        name: 'ckeditor',
        files: ['vendor/angular-ckeditor/angular-ckeditor.min.js']
    }, {
        name: 'mwl.calendar',
        files: ['vendor/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar.js', 'vendor/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.js', 'vendor/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css']
    }, {
        name: 'ng-nestable',
        files: ['vendor/ng-nestable/src/angular-nestable.js']
    }, {
        name: 'vAccordion',
        files: ['vendor/v-accordion/dist/v-accordion.min.js', 'vendor/v-accordion/dist/v-accordion.min.css']
    }, {
        name: 'xeditable',
        files: ['vendor/angular-xeditable/dist/js/xeditable.min.js', 'vendor/angular-xeditable/dist/css/xeditable.css', 'assets/js/config/config-xeditable.js']
    }, {
        name: 'checklist-model',
        files: ['vendor/checklist-model/checklist-model.js']
    }]
});
