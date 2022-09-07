<!--<template lang="html">
  <div>
    <div>test</div>
    <Table :rows="rows">
      <TableColumn prop="id" title="ID">
        <template slot-scope="{ row }">
          <b>{{ row.id }}</b>
        </template>
      </TableColumn>
      <TableColumn prop="name" title="Name"/>
      <TableColumn prop="rating" title="Rating">
        <template slot-scope="{ row, items }">
          {{ row.rating }}
          <b v-if="items.every(item => item.rating <= row.rating)">Best choiсe!</b>
        </template>
      </TableColumn>

    </Table>
  </div>
</template>-->
<template lang="html">
  <div>
    <div>test</div>
    <Table :rows="rows">
      <TableColumn prop="id" title="ID"/>

      <TableColumn prop="name" title="Name"/>
      <TableColumn prop="rating" title="Rating"/>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/table/Table.vue'
import TableColumn from '@/components/table/TableColumn.vue'
import Test from '@/components/table/Test.vue'
export default {
  name: 'habrtable',
  data() {
    return {
      rows: [
        { id: 1,
          name: 'Sony',
          rating: 777 },
        { id: 2,
          name: 'Apple',
          rating: 555 },
        { id: 3,
          name: 'Samsung',
          rating: 333 }
      ]
    }
  },
  components: {
    TableColumn,
    Table,
    Test
  },
};
</script>
