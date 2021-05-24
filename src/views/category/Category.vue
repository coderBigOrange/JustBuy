<template>
  <div class="category">
    <category-nav-bar></category-nav-bar>
    <root-list :sorts-list="sortsList" @sortClick="sortClick"></root-list>
    <category-content :category-goods-list="categoryGoodsList" :is-ref="isRef"></category-content>
  </div>
</template>

<script>
import CategoryNavBar from './childComponent/CatgoryNavBar'
import RootList from './childComponent/RootList'
import CategoryContent from './childComponent/CategoryCtn'

import {getCategoryInfo, getSortsList} from 'network/category'
import {sortsList, GetCateGoryGoods} from 'common/category'

export default {
 name: "Category",
 data() {
   return {
     sortsList: [],
     categoryGoodsList: [],
     isRef: false
   }
 },
 methods: {
   getSortsList() {
     getSortsList().then(res => {
        this.sortsList = sortsList;
     }, err => {
       console.log('getSortsList failed!')
     })
   },
   getCategoryInfo(id) {
     getCategoryInfo(id).then(res => {
       this.categoryGoodsList = GetCateGoryGoods(id);
     }, err => {
       console.log('getCategoryInfo failed!')
     })
   },
   sortClick(index) {
     this.getCategoryInfo(index);
     this.isRef = true;
   }
 },
 components: {
   CategoryNavBar,
   RootList,
   CategoryContent
 },
 created() {
   this.getSortsList();
   this.getCategoryInfo(0);
 }
};
</script>

<style scoped>
  .category {
    overflow: hidden;
  }
</style>