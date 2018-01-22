import Vue from 'vue';
import $ from 'jquery';
require('datatables.net-bs')(window, $);
import configureDataTables from '/static/js/configureDataTables';
import {DataTable, DataTableMixin} from 'vue-datatables';
 
configureDataTables($);
 
Vue.component('v-datatable', DataTable);
 
new Vue({
    mixins: [DataTableMixin],
 
    el: 'body',
 
    data: {
        columns: [
            {name: 'name', data: 'name', title: 'Name'},
            {name: 'email', data: 'email', title: 'Email'},
            {name: 'created_at', data: 'created_at', title: 'Created', callback: 'createdAt'},
            '__actions'
        ],
 
        itemActions: [
            {name: 'edit', icon: 'glyphicon glyphicon-pencil', class: 'btn btn-primary btn-xs'},
            {name: 'delete', title: 'Delete', icon: 'glyphicon glyphicon-trash', class: 'btn btn-danger btn-xs'}
        ]
    },
 
    events: {
        'vue-datatables:ready': function () {
            const btn = $('<button>', {text: 'Add New', type: 'button', class: 'btn btn-default btn-sm'});
 
            btn.on('click', () => this.addAction());
 
            $('.dataTables-add-action').append(btn);
        }
    },
 
    methods: {
        addAction() {
            console.log('add clicked');
        },
 
        createdAt(data) {
            return `[${data}]`;
        },
 
        editAction(row, index) {
            console.log('edit', row, index);
        },
 
        deleteAction(row, index) {
            this.refreshDataTable();
            // this.$broadcast('vue-datatable:refresh'); 
        }
    }
});