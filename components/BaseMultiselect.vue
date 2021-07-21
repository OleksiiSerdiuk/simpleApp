<template>
  <multiselect
    :value="value"
    :options="options"
    :searchable="true"
    :label="label"
    :loading="loading"
    @search-change="searchChange"
    @select="$emit('select', $event)"
    @input="$emit('input', $event)"
  />
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
