<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%" class="withount-padding">
    <el-table-column width="80px" align="center" label="">
      <template slot-scope="scope" style="overflow: visible">
        <v-tooltip v-if="scope.row.changes" bottom style="disblay: block">
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              style="color: red; cursor: pointer"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              mdi-alert-circle
            </v-icon>
          </template>
          <span>{{ scope.row.changes.title_link }}</span>
        </v-tooltip>
      </template>
    </el-table-column>
    <el-table-column v-loading="loading" align="center" label="N" width="65" element-loading-text="Загрузка">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="Дата">
      <template slot-scope="scope">
        <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
      </template>
    </el-table-column>

    <el-table-column min-width="300px" align="right" label="Сумма">
      <template slot-scope="scope">
        <span>{{ scope.row.pay.total }} USD</span>
      </template>
    </el-table-column>

    <el-table-column min-width="100px" align="right" label="Оплата">
      <template slot-scope="scope">
        <span
          :class="scope.row.pay.part < scope.row.pay.total ? 'danger' : 'full'"
          class="cell__over"
          :style="`background: linear-gradient(to right, ${scope.row.pay.part < scope.row.pay.total ? '#ff00003d' : '#00800061'} ${Math.ceil(scope.row.pay.part * 100 / scope.row.pay.total)}%, transparent 0%)`"
        >
          <i v-if="scope.row.pay.part < scope.row.pay.total" class="el-icon-error" />
          <i v-if="scope.row.pay.part === scope.row.pay.total" class="el-icon-success" />
          {{ scope.row.pay.part }} USD
        </span>
      </template>
    </el-table-column>

    <el-table-column min-width="100px" align="right" label="Отгрузка">
      <template slot-scope="scope">
        <div
          class="pay__cell"
          :style="`background: linear-gradient(to right, #1890ff59 ${scope.row.shipment}%, transparent 0%)`"
        >
          <span>{{ scope.row.shipment }} %</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column min-width="80px" align="left">
      <template slot-scope="scope">
        <svg-icon icon-class="message" />
        <span>{{ scope.row.messages }}</span>
      </template>
    </el-table-column>

    <el-table-column class-name="status-col" label="Статус" width="300">
      <template slot-scope="{row}">
        <el-tag :type="row.status.type | statusFilter">
          {{ row.status.title }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchList } from '@/api/article'
import { VTooltip, VIcon } from 'vuetify/lib'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        waiting_pay: 'success',
        agreement: 'info',
        close: 'danger'
      }
      return statusMap[status]
    }
  },
  components: {
    VTooltip,
    VIcon
  },
  props: {
    type: {
      type: String,
      default: 'All'
    }
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 25,
        type: this.type,
        sort: '+id'
      },
      loading: false,
      isActive: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      this.$emit('create') // for test
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.loading = false
      })
    }
  }
}

</script>

<style>
.el-icon-warning:before,
.el-icon-error:before {
  color: red;
}

.el-icon-success:before {
  color: green;
}

.button__tooltip {
  position: relative;
  background: transparent;
  border: none;
}

.tooltip {
  position: absolute;
  background-color: #fff;
  padding: 20px;
  display: none;
}

.button__tooltip.active .tooltip {
  display: block;
}

.withount-padding.el-table--medium td {
  position: relative;
}

.danger {
  width: 100%;
  display: flex;
  background: #ff000047;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}

.pay__cell {
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-left: 10px;
  padding-right: 10px;
}

.full {
  width: 100%;
  display: flex;
  background: #0080003b;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  align-items: center;
  padding-right: 10px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}

.v-tooltip {
    display: block;
}

.v-tooltip__content {
    width: 200px;

}
</style>

