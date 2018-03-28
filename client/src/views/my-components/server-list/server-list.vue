<style lang="less">
@import "../../../styles/common.less";
@import "server-list.less";
</style>

<template>
    <div>
        <Table border size="large" :loading="getServerList.length>0?false:true" :columns="columns5" :data="getServerList"></Table>
    </div>
</template>

<script>
import Sortable from "sortablejs";
import expandRow from '../server_details/server_details.vue';
import { mapGetters } from "vuex";

export default {
  name: "server-list",
  data() {
    return {
      columns5: [
        {
                type: 'expand',
                width: 50,
                render: (h, params) => {
                    return h(expandRow, {
                        props: {
                            row: params.row
                        }
                    })
                }
        },
        {
          title: "NAME",
          key: "title",
          sortable: true
        },
        {
          title: "TAGS",
          key: "tag",
          sortable: true
        },
        // {
        //   title: "UUID",
        //   key: "uuid"
        // },
        {
          title: "IP ADDRESS",
          key: "ip_address"
        },
        {
          title: "ZONE",
          key: "zone"
        }
      ]
    };
  },
  components: { 
      expandRow 
  },
  computed: {
    ...mapGetters({
      getServerList: "serverList"
    })
  },
  created() {
    this.$store.dispatch("FETCH_SERVERS");
  },
  mounted() {
    document.body.ondrop = function(event) {
      event.preventDefault();
      event.stopPropagation();
    };
  },
  method: {

  }
};
</script>
