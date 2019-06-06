import React from 'react'
import { render } from 'react-dom'

// 帐号相关拿到uid token 并存起来
// 进入玩游戏的时候带上uid和token

import './global.less'

import P1 from './account_p1'
import P2 from './account_p2'
import P3 from './account_p3'
import P4 from './account_p4'
import P5 from './account_p5'
import P6 from './account_p6'
import P7 from './account_p7'
import P8 from './account_p8'
import P9_10_11_12_13 from './account_assistive_touch'

import './sdk'
import {app_emitter} from './emitter'

class App extends React.Component{
	constructor (props){
		super(props)

		app_emitter.on('xloadpay', (...args) => {
			console.log('xloadpay:', ...args)
			this.refs['p8'].show()
		})
	}
  render (){
    return (
      <section className="account_wrap">
       <P1 ref="p1" ononelogin={() => {
					// console.log(this.refs['p1'].fn1)
					this.refs['p2'].show()
				}} onmblogin={() => {
					this.refs['p6'].show()
				}} onloginorregister={() => {
					this.refs['p3'].show()
				}}/>
        <P2 ref="p2" onstartgame ={() => {
					console.log('%c startgame!', 'font-size:23px;')
				}} onhide={() => {
					this.refs['p1'].show()
				}}/>
         <P3 ref="p3" onhide={() => {
					this.refs['p1'].show()
				}} onswitch={() => {
					this.refs['p4'].show()
				}} onforgetpwd={() => {
					this.refs['p5'].show()
				}} ononelogin={() => {
					this.refs['p2'].show()
				}}/>
        <P4 ref="p4" onswitch={() => {
					// console.log('pr switch!!')
					this.refs['p3'].show()
				}} onforgetpwd={() => {
					this.refs['p5'].show()
				}} ononelogin={() => {
					this.refs['p2'].show()
				}}/>
				<P5 ref="p5" onhide={() => {
					this.refs['p1'].show()
				}}/>
        <P6 ref="p6" onhide={() => {
					this.refs['p1'].show()
				}} onstartgame={() => {
					console.log('%c startgame!', 'font-size:23px;')
				}}/>
        <P7 ref="p7"/>
        <P8 ref="p8"/>
        <P9_10_11_12_13 ref="p9-p13"/>
      </section>
    )
	}
  componentDidMount (){
    var $p1 = this.refs['p1'].refs['root']
    var $p2 = this.refs['p2'].refs['root']
    var $p3 = this.refs['p3'].refs['root']
		var $p4 = this.refs['p4'].refs['root']
		var $p5 = this.refs['p5'].refs['root']
    var $p6 = this.refs['p6'].refs['root']
    var $p7 = this.refs['p7'].refs['root']
    var $p8 = this.refs['p8'].refs['root']
		var $p913 = this.refs['p9-p13'].refs['root']

		// console.log($p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p913)

		if (window.INIT_DATA.__usage__ === 'playgame'){
			this.refs['p9-p13'].show()
		} else {
			this.refs['p1'].show()
		}
	}
}

render(
	<App/>,
	document.querySelector('#root')
)
