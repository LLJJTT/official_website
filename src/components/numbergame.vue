<template>
    <div class="box">
        <div class="wrapper">
            <ul class="puzzle-wrap">
                <li 
                    :class="{'puzzle': true, 'puzzle-empty': !puzzle}" 
                    v-for="(puzzle,index) in puzzles" 
                    v-text="puzzle"
                    @click="moveFn(index)"
                ></li>
            </ul>
            <el-button class="restart" type="primary" @click="reStart">重新开始</el-button>
        </div>
        <div class="info">
            <ul>
                <li>步数</li>
                <li id="step">{{stepVal}}</li>
            </ul>
        </div>
        <div class="intro">
            <ul>
                <li>游戏介绍</li>
                <li>按照从小到大、从左到右的顺序依次排列</li>
                <li>点击数字,移动位置</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            puzzles: [],
            stepVal:0
        }
    },
    methods: {
        // 重置渲染
        render:function() {
            let puzzleArr = [],
            i = 1
            // 生成包含1 ~ 15数字的数组
            for (i; i < 16; i++) {
                puzzleArr.push(i)
            }
            // 随机打乱数组
            puzzleArr = puzzleArr.sort(() => {
                return Math.random() - 0.5
            });
            // 页面显示
            this.puzzles = puzzleArr
            this.puzzles.push('')
        },
        // 点击方块
        moveFn:function (index) {

            // 获取点击位置及其上下左右的值
            let curNum = this.puzzles[index],
                leftNum = this.puzzles[index - 1],
                rightNum = this.puzzles[index + 1],
                topNum = this.puzzles[index - 4],
                bottomNum = this.puzzles[index + 4]
            // 与为空的位置交换数值
            if (leftNum === '' && index % 4) {//左''
                this.$set(this.puzzles,index - 1, curNum)
                this.$set(this.puzzles,index, '')
                this.stepVal++

            } 
            else if (rightNum === '' && 3 !== index % 4) {//右''
                this.$set(this.puzzles,index + 1, curNum)
                this.$set(this.puzzles,index, '')
                this.stepVal++
            } 
            else if (topNum === '') {//上''
                this.$set(this.puzzles,index - 4, curNum)
                this.$set(this.puzzles,index, '')
                this.stepVal++
            }
            else if (bottomNum === '') {//下''
                console.log("下")
                this.$set(this.puzzles,index + 4, curNum)
                this.$set(this.puzzles,index, '')
                this.stepVal++
            }
            else{
                this.$message({
                    message:"当前点击不能动",
                    type:'warning'
                })

            }

            this.passFn()
        },
        // 校验是否过关
        passFn:function () {
            if (this.puzzles[15] === '') {
                const newPuzzles = this.puzzles.slice(0, 15)
                const isPass = newPuzzles.every((e, i) => e === i + 1)
                if (isPass) {
                    this.$alert('你成功了！！');
                    this.$alert('一共用了'+this.stepVal);
                    this.stepVal=0;
                    this.render()
                }
            }
        },
        reStart:function(){
            this.$confirm('开始游戏数字排列会刷新,你确定要重新开始游戏？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                this.render()
            }).catch(() => {
                       
            });
        }
    },
    created:function(){
        this.render()
    }
}
</script>

<style scoped>
body {
    font-family: Arial, "Microsoft YaHei"; 
}
.box {
    width:100%;
    margin: 0 auto;
    background:#000;
    padding: 100px 0 50px 0;
}
.wrapper{
    width:408px;
    margin: 0 auto;
    padding: 20px 0;
}
.puzzle-wrap {
    width: 408px;
    height: 408px;
    margin-bottom: 40px;
    padding: 0;
    background: #ccc;
    list-style: none;
}

.puzzle {
    float: left;
    width: 100px;
    height: 100px;
    font-size: 20px;
    background: #000000;
    text-align: center;
    line-height: 100px;
    border: 1px solid #ccc;
    cursor: pointer;
    color: #f2f2f2;
}
.puzzle-wrap .puzzle:hover{
    transition: .9s;
    background: #5971CD;
    transform:scale(0.95);
    cursor:pointer;
}
.puzzle-empty:hover{
    transform:scale(1) !important;
    background: #ccc !important;
}
.puzzle-empty {
    box-shadow: 0px 0px 2px 2px inset;
    background: #ccc;
}
.info{
    display: inline-block;
    width:100px;
    position: absolute;
    right: 100px;
    top: 304px;
}
.info ul li{
    color: #aaa;
    font-weight: bold;
    font-size: 26px;
}
.info ul li:last-child{
    font-size: 30px;
    color: #fff;
}
.intro{
    display: inline-block;
    width:200px;
    position: absolute;
    left: 50px;
    top: 304px;
}
.intro ul li{
    color: #aaa;
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
}
.intro ul li:first-child{
    font-size: 20px;
}
.intro ul li:last-child{
    color: #fff;
}
.restart{
    margin-top: 100px;
}
@media(max-width:830px){
    .box {
        width:100%;
        margin: 0 auto;
        background:#000;
        padding: 300px 0 50px 0;
    }
    .wrapper{
        width:308px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .puzzle-wrap {
        width: 308px;
        height: 308px;
        margin-bottom: 40px;
        padding: 0;
        background: #ccc;
        list-style: none;
    }
    .puzzle {
        float: left;
        width: 75px;
        height: 75px;
        font-size: 20px;
        background: #000000;
        text-align: center;
        line-height: 75px;
        border: 1px solid #ccc;
        cursor: pointer;
        color: #f2f2f2;
    }
    .puzzle-empty {
        box-shadow: 0px 0px 2px 2px inset;
        background: #ccc;
    }
    .puzzle-wrap .puzzle:hover{
        transition:0.1s;
        background: #000000;
        transform:scale(1) !important;
    }
    .puzzle-empty:hover{
        transform:scale(1) !important;
        background: #ccc !important;
    }

    .info{
        display: inline-block;
        width:100px;
        margin-top: -120px;
        right: 20px;
    }
    .info ul li{
        color: #aaa;
        font-weight: bold;
        font-size: 26px;
    }
    .info ul li:last-child{
        font-size: 30px;
        color: #fff;
    }
    .intro{
        display: inline-block;
        width:200px;
        margin-top: -120px;
    }
    .intro ul li{
        color: #aaa;
        font-weight: bold;
        font-size: 14px;
        line-height: 30px;
    }
    .intro ul li:first-child{
        font-size: 20px;
    }
    .intro ul li:last-child{
        color: #fff;
    }
}
</style>





