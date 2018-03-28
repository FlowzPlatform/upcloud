<style lang="less">
@import "../../../styles/common.less";
@import "deploy-server-list.less";
</style>

<template>
    <div>
      Deploy server list
        <Table border :columns="columns5" :data="getServerList"></Table>
    </div>
</template>

<script>
import Sortable from "sortablejs";
import { mapGetters } from "vuex";

export default {
  name: "server-list",
  data() {
    return {
      columns5: [
        {
          title: "NAME",
          key: "hostname",
          sortable: true
        },
        {
          title: "TAGS",
          key: "tag"
        },
        {
          title: "UUID",
          key: "uuid"
        },
        {
          title: "IP ADDRESS",
          key: "ip address"
        },
        {
          title: "ZONE",
          key: "zone"
        }
      ],
      server_data: []
    };
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
