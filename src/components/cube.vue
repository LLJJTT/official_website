<template>
	<div id="cube">
		<div class="oface1">动画-Rotating nested cubes</div>
		<div class="wrapper cube__container splash-viz__cube">
			<span class="cube cube--dark">
				<figure class="cube__outer" :style="outerStyle">
					<section class="cube__face oface" style="transform: rotateX(0deg) translateZ(60px); border-width: 1px;">没</section>
					<section class="cube__face oface" style="transform: rotateX(-90deg) translateZ(60px); border-width: 1px;"></section>
					<section class="cube__face oface" style="transform: rotateX(90deg) translateZ(60px);">嵌套旋转立方</section>
					<section class="cube__face oface" style="transform: rotateY(-90deg) translateZ(60px);">老铁们</section>
					<section class="cube__face oface" style="transform: rotateY(90deg) translateZ(60px); border-width: 1px;">毛</section>
					<section class="cube__face oface" style="transform: rotateY(180deg) translateZ(60px);">病</section>
				</figure>

				<figure class="cube__inner" :style="innerStyle">
					<section class="cube__face iface" style="transform: rotateX(0deg) translateZ(60px);">A</section>
					<section class="cube__face iface" style="transform: rotateX(-90deg) translateZ(60px);">F</section>
					<section class="cube__face iface" style="transform: rotateX(90deg) translateZ(60px);">E</section>
					<section class="cube__face iface" style="transform: rotateY(-90deg) translateZ(60px);">D</section>
					<section class="cube__face iface" style="transform: rotateY(90deg) translateZ(60px);">B</section>
					<section class="cube__face iface" style="transform: rotateY(180deg) translateZ(60px);">C</section>
				</figure>

			</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				innerStyle:'width: 120px; height: 120px; transform: translateX(-50%) scale3d(0.5, 0.5, 0.5) rotateX(0deg) rotateY(0deg) rotateZ(0deg);',
				outerStyle:'width: 120px; height: 120px; transform: translateX(-50%) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);',
				ix:0,
				iy:0,
				iz:0,
				ox:0,
				oy:0,
				oz:0,

			}
		},
		methods:{
			moveOuter(){
				const _this = this
				setInterval(() =>{
					_this.iy+=2
					_this.oy-=3
					_this.innerStyle = 'width: 120px; height: 120px; transform: translateX(-50%) scale3d(0.8, 0.8, 0.8) rotateX('+_this.ix+'deg)  rotateY('+_this.iy+'deg) rotateZ('+_this.iz+'deg)'
					_this.outerStyle = 'width: 120px; height: 120px; transform: translateX(-50%) scale3d(1.5, 1.5, 1.5) rotateX('+_this.ox+'deg)  rotateY('+_this.oy+'deg) rotateZ('+_this.oz+'deg)'
				},30)
			}
		},
		created(){
			this.moveOuter()
		}
	}
</script>

<style scoped>
#cube{
	width:100%;
  margin: 0 auto;
  background:#000;
  padding: 200px 0 400px 0;

}
.wrapper{
	display: block;
  width: 180px;
	height: 180px;
	margin: 0 auto;
}
.cube{
	width: 120px;
  padding-bottom: 60px;
  position: relative;
  padding:20px 0 0 83px;
  display: block;
  text-align: center;
  transform-style: preserve-3d;
  transform: rotateX(-33.5deg) rotateY(45deg);
}
.cube__inner, .cube__outer {
    display: inline-block;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 1000ms;
    transition: -webkit-transform 1000ms;
    transition: transform 1000ms;
    transition: transform 1000ms, -webkit-transform 1000ms;
}
.cube .cube__outer .cube__face {
    background: rgba(141, 214, 249, 0.5);
    -webkit-transition: border-width 0.2s;
    transition: border-width 0.2s;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
}
.cube__face {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #cdf8ab;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
.cube .cube__inner .cube__face {
    background: #1D78C1;
    border: 2px solid #ffffff;
}
.cube__inner {
    position: absolute;
    top: 30px;
    right: -5px;
}
.oface{
	 line-height: 120px;
	 text-align: center;
	 color: #fff903;
	 font-weight: bolder;
	 letter-spacing: 4px;
}
.iface{
	line-height: 120px;
	 text-align: center;
	 color: #fff;
	 font-weight: bolder;
	 letter-spacing: 6px;
}
.oface1{
	padding-bottom: 100px;
 	text-align: center;
 	color: #2eb075;
 	font-weight: bolder;
 	letter-spacing: 4px;
 	font-size: 30px;
}
</style>