<template>
  <div class="container">

     <Vheader></Vheader>

        <Vlist></Vlist>
        <Vpager></Vpager>
      

        <div class="modal" style="display: -block">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">注册</h5>
                        <button type="button" class="close">
                            <span>&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">

                        <!-- 注册 -->
                        <form>
                            <div class="form-group row">
                                <label for="username" class="col-md-3 col-form-label">用户名</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" id="username" placeholder="用户名" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-md-3 col-form-label">密码</label>
                                <div class="col-md-9">
                                    <input type="password" class="form-control" id="password" placeholder="密码" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="repassword" class="col-md-3 col-form-label">重复密码</label>
                                <div class="col-md-9">
                                    <input type="password" class="form-control" id="repassword" placeholder="重复密码" />
                                </div>
                            </div>
                        </form>

                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">注册</button>
                        <button type="button" class="btn btn-secondary">取消</button>
                        <a href="">我有账号，立即登录</a>
                    </div>
                </div>
            </div>
        </div>



        <div class="modal" style="display: -block">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">登录</h5>
                        <button type="button" class="close">
                            <span>&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">

                        <!-- 登录 -->
                        <form>
                            <div class="form-group row">
                                <label for="username" class="col-md-3 col-form-label">用户名</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" id="username" placeholder="用户名" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-md-3 col-form-label">密码</label>
                                <div class="col-md-9">
                                    <input type="password" class="form-control" id="password" placeholder="密码" />
                                </div>
                            </div>
                        </form>

                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">登录</button>
                        <button type="button" class="btn btn-secondary">取消</button>
                        <a href="">我要注册</a>
                    </div>
                </div>
            </div>
        </div>



        <div class="modal" style="display: -block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">xxxxxxxxxx</h5>
                            <button type="button" class="close">
                                <span>&times;</span>
                            </button>
                        </div>
    
                        <div class="modal-body">
    
                            <!-- 回复 -->
                            <form>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <textarea class="form-control" id="username" placeholder="回复内容……" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                            </form>
    
                        </div>
    
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">回复</button>
                            <button type="button" class="btn btn-secondary">取消</button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>
<script>
import Vheader from './components/Vhead'
import Vlist from './components/Vlist'
import Vpager from './components/Vpager'
export default {
  data () {
    
  },
  created() {
    
  },
  components: {
    Vheader,
    Vlist,
    Vpager
  }
}
</script>
