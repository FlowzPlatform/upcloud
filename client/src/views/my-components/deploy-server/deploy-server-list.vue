<style lang="less">
@import "../../../styles/common.less";
@import "deploy-server-list.less";
</style>
<template>
<div>
   <Row style="background:#eee;padding:20px">
       <Col>
            <Card :bordered="false">
                <p slot="title">1. SERVER NAME</p>
                <p>  
                  <div class="server-title">SERVER NAME</div>
                  <Col> 
                      <Input  placeholder="Enter server name" style="width: 300px"></Input>
                        <span>
                          The server name will be used as server's hostname. Example: mysqldb1.domain.com
                        </span>
                  </Col>
                </p>
                <p>  
                  <div class="server-title">SHORT SERVER DESCRIPTION</div>
                  <Col> 
                      <Input placeholder="Enter server name" style="width: 300px"></Input>
                        <span>
                            You can facilitate the management of many servers with optional descriptions. Example: MySQL DB #1
                        </span>
                  </Col>
                </p>
            </Card>
        </Col>
   </Row>
   <Row style="background:#eee;padding:20px">
       <Row>
        <Col>
                <Card :bordered="false">
                    <p slot="title">2. AVAILABILITY ZONE</p>
                    <div>The Availability Zone defines the physical location of the server.</div>
                </Card>    
        </Col>
       </Row>
       <Row>
            <Col span="4" v-for="zone in getZoneList">
                    <Card style="width:200px">
                        <div style="text-align:center">
                            <img v-if="(zone.id).substring(0, zone.id.length - 1) === 'fi-hel'" src="https://my.upcloud.com/images/flags/large/fi.png">
                            <img v-else-if="(zone.id).substring(0, zone.id.length - 1) === 'de-fra'" src="https://my.upcloud.com/images/flags/large/de.png">
                            <img v-else-if="(zone.id).substring(0, zone.id.length - 1) === 'nl-ams'" src="https://my.upcloud.com/images/flags/large/nl.png">
                            <img v-else-if="(zone.id).substring(0, zone.id.length - 1) === 'sg-sin'" src="https://my.upcloud.com/images/flags/large/sg.png">
                            <img v-else-if="(zone.id).substring(0, zone.id.length - 1) === 'uk-lon'" src="https://my.upcloud.com/images/flags/large/uk.png">
                            <img v-else-if="(zone.id).substring(0, zone.id.length - 1) === 'us-chi'" src="https://my.upcloud.com/images/flags/large/us.png">
                          
                            <h3>{{zone.description}}</h3>
                        </div>
                    </Card>
            </Col>    
       </Row>
   </Row>
    <Row style="background:#eee;padding:20px">
       <Row>
        <Col>
            <Card :bordered="false">
                <p slot="title">3. DEFINE CONFIGURATION</p>
                <div>Please select one of the Preconfigured Instances, or customize memory-, CPU and storage resources</div>
            </Card>    
        </Col>
       </Row>
       <Row>
            <Col span="4" v-for="plan in getPlanList">
                    <Card style="width:200px">
                        <div style="text-align:center">
                            <div>{{plan.memory_amount}} MB / {{plan.core_number}} CPU</div>
                            <div>{{plan.storage_size}} GB  {{plan.storage_tier}} disk</div>
                            <div>{{plan.public_traffic_out}} GB Transfer</div>
                            
                        </div>
                    </Card>
            </Col>    
       </Row>
   </Row>
   <Row style="background:#eee;padding:20px">
       <Col>
            <Card :bordered="false">
                <p slot="title">4. DISKS</p>
            </Card>
        </Col>
   </Row>
   <Row style="background:#eee;padding:20px">
       <Col>
            <Card :bordered="false">
                <p slot="title">5. OS TEMPLATE</p>
            </Card>
        </Col>
   </Row> 
   <Row style="background:#eee;padding:20px">
       <Col>
            <Card :bordered="false">
                <p slot="title">6. SSH KEYS</p>
            </Card>
        </Col>
   </Row>
   <Row style="background:#eee;padding:20px">
       <Col>
            <Card :bordered="false">
                <p slot="title">7. MISCELLANEOUS SERVER SETTINGS</p>
            </Card>
        </Col>
   </Row>
   <Row style="background:#eee;padding:20px">
       <Col>
            <Card :bordered="false">
                <p slot="title">8. DEPLOY SERVER</p>
            </Card>
        </Col>
   </Row>
</div>
</template>

<script>
import Sortable from "sortablejs";
import { mapGetters } from "vuex";

export default {
  name: "server-list",
  data() {
    return {
      server_data: []
    };
  },
  computed: {
    ...mapGetters({
      getZoneList: "zoneList",
      getPlanList:"planList"
    })
  },
  created() {
    this.$store.dispatch("FETCH_ZONE");
    this.$store.dispatch("FETCH_PLAN");
    
  },
  mounted() {
    document.body.ondrop = function(event) {
      event.preventDefault();
      event.stopPropagation();
    };
  },
  method: {}
};
</script>
