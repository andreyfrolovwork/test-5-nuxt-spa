<template lang='pug'>
  div(class='center')
    RenderFuncComponent(:collection='collection' text='testText')
      TableColumnComponent(field='name')
        template(#cusname='props')
          CustomCell(:text='props.text')
        template
          div custom div
      TableColumnComponent(field='job' label='Работа')
      TableColumnComponent(field='dob' label='Дата рождения')
      TableColumnComponent(field='photo' label='Фото')
</template>

<!--table-column-component(field="name")
template(#label)
.color(:style="{ color: 'red' }")
.color__label Имя
table-column-component(field="photo", label="Фотогафия")
template(#default="{ row: { photo } }")
img(:src="photo")
table-column-component(field="dob", label="День рождения")
table-column-component(field="job", label="Должность")-->

<script>
import RenderFuncComponent from '@/components/RenderFuncComponent.vue'
import TableColumnComponent from '@/components/TableColumnComponent.vue'
import CustomCell from '@/components/CustomCell.vue'
export default {
  name: 'render-function',
  data(){
    return {
      collection:[
        {
          name: 'John Dow',
          job: 'Developer',
          dob: '10.12.1988',
          photo: 'http://lorempixel.com/output/people-q-c-200-200-6.jpg'
        },
        {
          name: 'Dzhigurda',
          job: 'Clown',
          dob: '24.03.1962',
          photo: 'http://lorempixel.com/output/people-q-c-200-200-6.jpg'
        }
      ]

    }
  },
  components:{
    RenderFuncComponent,
    CustomCell
  }
}
</script>

<style  scoped>
.center {
  display: flex;
  justify-content: center;
}

</style>
