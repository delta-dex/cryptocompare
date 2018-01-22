import $ from 'jquery';
 
export default function () {
    $.extend(true, $.fn.dataTable.defaults, {
        dom: `
            <'row'<'col-sm-6 dataTables-add-action'><'col-sm-6 dataTables-length-filter'lf>>
            <'row'<'col-sm-12'tr>>
            <'row'<'col-sm-5'i><'col-sm-7'p>>
        `,
        renderer: 'bootstrap'
    });
}