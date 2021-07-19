<template>
  <div>
    <multiselect
      v-model="value"
      :options="options"
      :searchable="true"
      label="name"
      :loading="loading"
      @search-change="searchChange"
    />
  </div>
</template>

<script>
  export default {
    name: 'BaseMultiselect',
    props: {
      value: {
        type: [Object, Array, Number, String],
        default: null,
      },
      options: {
        type: Array,
        default: () => [],
      },
      loading: {
        type: Boolean,
        default: false,
      },
      searchChange: {
        type: [Object, Array, Number, String, Function],
        default: null,
      },
      label: {
        type: [String, Boolean],
        default: '',
      },
      searchable: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>
