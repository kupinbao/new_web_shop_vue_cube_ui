import axios from 'axios';


// let host = 'http://shop.projectsedu.com';
let host = 'http://127.0.0.1:8000'

//获取商品类别信息
export const queryCategorygoods = params => { return axios.get(`${host}/indexgoods/`) }

//获取首页中的新品
export const newGoods = params => { return axios.get(`${host}/newgoods/`) }

//获取轮播图
export const bannerGoods = params => { return axios.get(`${host}/banners/`) }

//获取Max信息
export const getMax = parems => { return axios.get(`${host}/max/`)}

//获取粮油生鲜信息
export const getCookCategory = parems => { return axios.get(`${host}/cookcategory/`)}
export const getCool = parems => { return axios.get(`${host}/cook/`)}

//获取饮品信息
export const getDrinkCategory = parems => { return axios.get(`${host}/drinkcategory/`)}
export const getDrink = parems => { return axios.get(`${host}/drink/`)}

//获取日用品信息
export const getEveryDayCategory = parems => { return axios.get(`${host}/everydaycategory/`)}
export const getEveryDay = parems => { return axios.get(`${host}/everyday/`)}


//获取日用品信息
export const getSmokeCategory = parems => { return axios.get(`${host}/smokecategory/`)}
export const getSmoke = parems => { return axios.get(`${host}/smoke/`)}



//获取热门搜索关键词
export const getHotSearch = params => { return axios.get(`${host}/hotsearchs/`) }


//获取购物车商品
export const getShopCarts = params => { return axios.get(`${host}/shopcarts/`) }
// 添加商品到购物车
export const addShopCart = params => { return axios.post(`${host}/shopcarts/`, params) }
//更新购物车商品信息
export const updateShopCart = (goodsId, params) => { return axios.patch(`${host}/shopcarts/`+goodsId+'/', params) }
//删除某个商品的购物记录
export const deleteShopCart = goodsId => { return axios.delete(`${host}/shopcarts/`+goodsId+'/') }

//收藏
export const addFav = params => { return axios.post(`${host}/userfavs/`, params) }

//取消收藏
export const delFav = goodsId => { return axios.delete(`${host}/userfavs/`+goodsId+'/') }

export const getAllFavs = () => { return axios.get(`${host}/userfavs/`) }

//判断是否收藏
export const getFav = goodsId => { return axios.get(`${host}/userfavs/`+goodsId+'/') }

//登录
export const login = params => {
  return axios.post(`${host}/login/`, params)
}

//注册

export const register = parmas => { return axios.post(`${host}/users/`, parmas) }

//短信
export const getMessage = parmas => { return axios.post(`${host}/code/`, parmas) }


//获取用户信息
export const getUserDetail = () => { return axios.get(`${host}/users/1/`) }

//修改用户信息
export const updateUserInfo = params => { return axios.patch(`${host}/users/1/`, params) }


//获取订单
export const getOrders = () => { return axios.get(`${host}/orders/`) }
//删除订单
export const delOrder = orderId => { return axios.delete(`${host}/orders/`+orderId+'/') }
//添加订单
export const createOrder = params => {return axios.post(`${host}/orders/`, params)}
//获取订单详情
export const getOrderDetail = orderId => {return axios.get(`${host}/orders/`+orderId+'/')}


//获取留言
export const getMessages = () => {return axios.get(`${host}/messages/`)}

//添加留言
export const addMessage = params => {return axios.post(`${host}/messages/`, params, {headers:{ 'Content-Type': 'multipart/form-data' }})}

//删除留言
export const delMessages = messageId => {return axios.delete(`${host}/messages/`+messageId+'/')}

//添加收货地址
export const addAddress = params => {return axios.post(`${host}/address/`, params)}

//删除收货地址
export const delAddress = addressId => {return axios.delete(`${host}/address/`+addressId+'/')}

//修改收货地址
export const updateAddress = (addressId, params) => {return axios.patch(`${host}/address/`+addressId+'/', params)}

//获取收货地址
export const getAddress = () => {return axios.get(`${host}/address/`)}
