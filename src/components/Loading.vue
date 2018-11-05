<template>
	<div id="loading">
		<div class="progress-wrapper">
			<div class="progress" ref="progress"></div>
		</div>	
	</div>
</template>
<script>
	export default {
		name: 'Loading',
		props: ['status'],
    mounted() {
		  let count = 0
		  if(!this.status){
		    setInterval( () => {
		      if(count>=98){
		        return
          }
		      count++
          this.$refs.progress.style.width = count + '%'
        }, 100)
      }
    }
	}
</script>
<style scoped>
	#loading{
		position:absolute;
		left:0;
		bottom:0;
		top:0;
		right:0;
		margin:auto;
		background:#000;
	}	
	.progress-wrapper{
		position:absolute;
		top:0;
		left:0;
		bottom:0;
		right: 0;
		margin: auto;
		width: 8.533333rem;
		height: 1rem;
		background:#fff;
	}
	.progress{
		position:absolute;
		left:0;
		top:0;
		width:0;
		height: 1rem;
		background:#ff5252;
		transition: width .2s linear;
	}
</style>
