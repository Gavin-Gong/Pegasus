<template>
  <div class="card">
    <img  v-lazy="background">
    <div class="mask">
      <slot></slot>
      <h3 class="card-title">{{ title }}</h3>
      <div class="description">
        <slot name="description"></slot>
      </div>
      <p class="card-postCount">{{ count }} 篇文章</p>
      <el-button
        class="card-btn"
        @click="routeTo({name: routeName, params: {id: id}})">查看</el-button>
    </div>
  </div>
</template>

<script>

</style>
