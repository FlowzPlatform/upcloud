<style lang="less">
    @import '../../../styles/common.less';
    @import './my-disk-resources.less';
</style>

<template>
    <div><h3>hello</h3>
        <Table border ref="selection" :columns="columns5" :data="data5"></Table>
    </div>
</template>

<script>
import tinymce from 'tinymce';
export default {
    name: 'my-disk-resources',
    data () {
        return {
            columns5: [
                    {
                        title: 'NAME & UUID',
                        key: 'date',
                        width: 350,
                        sortable: true
                    },
                    {
                        title: 'SIZE',
                        key: 'name'
                    },
                    {
                        title: 'ATTACHED TO',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: 'ZONE',
                        key: 'address'
                    },
                    {
                        title: 'ACTIOS',
                        key: 'actions'
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
        };
    },
    methods: {
        
    },
    created () {
        this.$store.dispatch("FETCH_STORAGEDETAILS")
    },
    computed: {
      
    },
    mounted () {
        
    },
    destroyed () {
        tinymce.get('articleEditor').destroy();
    }
};
</script>
