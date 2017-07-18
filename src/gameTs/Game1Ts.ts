class Game1Ts extends eui.Component {

	private shp:egret.Shape = new egret.Shape();
	private lineDatas=new Array();
	private wilddog=new WilddogioNet();
	private clear:eui.Button;//清除笔画按钮
	//private explainBtn:eui.Button;//说明弹出按钮
	//private explainGroup:eui.Group;//说明的group
	//private close:eui.Label;//说明文本关闭
	//private explain:eui.Label;//说明文本


	public constructor() {
		super();
		this.skinName="game1";
		this.init();
		this.addEvent();
		this.addChild( this. shp);
	}
	

	private init(){
		var bg:egret.Shape = new egret.Shape();
		bg.graphics.beginFill( 0x1F6936 );
		bg.graphics.drawRect( 0, 0, this.width, this.height ); 
		bg.graphics.endFill();
		this.addChild(bg);
		this.setChildIndex(bg,0);

		this.wilddog.getData('lineData',this.updataLine,this);
		this.wilddog.getData2('lineData',this.removeLine,this);

	}
	private removeLine(data,_that){
			_that.shp.graphics.clear();
		_that.lineDatas=new Array(); 
	}

	private updataLine(data,_that){
		
		if(data.t==0){
			_that.shp.graphics.lineStyle( 4, 0xffffff );
			_that.shp.graphics.moveTo( data.x,data.y );	
		}else if(data.t==1){
			_that.shp.graphics.lineTo( data.x,data.y );
		}else if(data.t==2){
			_that.shp.graphics.lineTo( data.x,data.y );
			_that.shp.graphics.endFill(); 
		}
	}

	private  addEvent(){
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
		this.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this);
		this.clear.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clearLine,this);
	}

	private clearLine(){
		this.wilddog.removeData("lineData");
		this.shp.graphics.clear();
		this.lineDatas=new Array(); 

	}

	private touchBegin(e:egret.TouchEvent){
		this.shp.graphics.lineStyle( 4, 0xffffff );
		this.shp.graphics.moveTo( e.stageX,e.stageY );
		this.lineDatas.push(new lineData(e.stageX,e.stageY,0));
	}
	private moveIndex=5;
	private touchMove(e:egret.TouchEvent){
		this.moveIndex++;
		if(this.moveIndex >= 5){
			this.shp.graphics.lineTo( e.stageX,e.stageY );
			this.lineDatas.push(new lineData(e.stageX,e.stageY,1));
			this.moveIndex=0;
		}
	}
	private touchEnd(e:egret.TouchEvent){
		this.shp.graphics.lineTo( e.stageX,e.stageY );
		this.lineDatas.push(new lineData(e.stageX,e.stageY,2));

		
		this.wilddog.upData("lineData",  this.lineDatas);

		this.shp.graphics.endFill(); 
	}


	

}