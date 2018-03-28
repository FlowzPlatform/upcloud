<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
    .expand-value{
        border-radius: 15px;
        background:#fff;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px; 
        width: 20px;
        height: 30px; 
    }
    .title{
        color:#000000;
        font-weight: bold;
    }
    .action-button{
        margin: 2px;
        font-weight: bold;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key title">Disk image: </span>
                <span class="expand-value">{{ row.disk_image }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key title">UUID: </span>
                <span class="expand-value">{{ row.uuid }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key title">CPU cores: </span>
                <span class="expand-value">{{ row.core_number }}</span>
            </Col>
        </Row>
        <Row style="margin-top:20px">
            <Col span="8">
                <span class="expand-key title">Disk space: </span>
                <span class="expand-value">{{ row.storage_device }} GB</span>
            </Col>
            <Col span="8">
                <span class="expand-key title">RAM: </span>
                <span class="expand-value">{{ row.memory_amount }} MB</span>
            </Col>
            <Col span="8">
                <span class="expand-key title">Uptime: </span>
                <span class="expand-value">{{ row.uptime }}</span>
            </Col>
        </Row>
         <Row style="margin-top:10px">
            <Col span="5" class="action-button">
                 <Button type="primary" size="large" long>Shutdown request</Button>
            </Col>
            <Col span="5" class="action-button">
               <Button type="primary" size="large" long>Force shutdown</Button>
            </Col>
            <Col span="5" class="action-button">
                <Button type="primary" size="large" long>Restart</Button>
            </Col>
            <Col span="5" class="action-button">
                <Button type="primary" size="large" long>Settings</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>