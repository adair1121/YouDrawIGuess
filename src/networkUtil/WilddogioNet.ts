class WilddogioNet {
	private URL_ONE="https://adair-1121.wilddogio.com";//野狗地址1
	

	public constructor() {
		wilddog.initializeApp({
				syncURL: this.URL_ONE
		})
		
	}
	/**
	 * 获得同步数据
	 * @pram func 回调方法
	 * @pram path 节点相对路径（相对根路径）
	 */
	public getData(path:string ,func:Function,_that){
		wilddog.sync().ref(path).on('child_added',function(snapshot){
			//console.log(snapshot.val())
			func(snapshot.val(),_that);
		})

	}

	public getData2(path:string ,func:Function,_that){
		wilddog.sync().ref(path).on('child_removed',function(snapshot){
			//console.log(snapshot.val())
			func(snapshot.val(),_that);
		})

	}


	/**
	 * 更新数据的方法
	 * @pram paht 路径
	 * @pram data JSON数据
	 * @pram successFunc 成功的回调，默认为空
	 * @pram errFunc 失败的回调，默认为空
	 */
	public upData(path:string,data:Object,successFunc:Function=null,errFunc:Function=null){
		wilddog.sync().ref(path).update(data)
			.then(function(){
				console.info('update data success.')
				successFunc
			})
			.catch(function(err){
				console.info('update data failed', err);
				successFunc
			});

	}
	public removeData(path:string){
		wilddog.sync().ref(path).remove()
			.then(function(){
				console.info('remove node success.')
			})
			.catch(function(err){
				console.info('remove node failed', err, err);
			});
	}


	




	


}