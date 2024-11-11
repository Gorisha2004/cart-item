import React from 'react';

const CartItem = (props) => {
 // this.testing();
   // testing(){
  //   const promise=new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve('done');
  //     },5000)
  //   })
  //   promise.then(()=>{
  //     //in promise setState acts like a synchronous call
  //     // this.setState({qty: 100});

  //     // console.log('state',this.state);
  //   });
  // }
  // increaseQuantity=()=>{
     //setState form 1
    // this.setState({
    //   qty: this.state.qty+1
    // });

    //setState form 2(by using callback)
    //if we want to use previous state than we will use form 2 , else we'll use form 1
  //   this.setState((prevState)=>{
  //       return{
  //         qty: prevState.qty + 1         
  //       }
  //   },() => {
  //     console.log('this.state',this.state);
  //   });
  // }
  // decreaseQuantity=()=>{
  //   const {qty} = this.state;
  //   if(qty==0){
  //     return;
  //   }
  //   console.log('this state',this.state);
  //   this.setState((prevState)=>{
  //     return{
  //       qty: prevState.qty-1
  //     }
  //   },() => {
  //     console.log('this.state',this.state);
  //   });
  // }

    const{price,title,qty}=props.product;
    const { 
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct 
    } = props;
    return(
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{fontSize:25}}>  {title}</div>
        <div style={{color:'#777'}}> Rs  {price}</div>
        <div style={{color:'#777'}}> Qty: {qty}</div>
        <div className="cart-item-actions">
          {/*Buttons*/}
          <img 
          alt="increase"
          className="action-icons" 
          src="https://static.vecteezy.com/system/resources/thumbnails/000/554/223/small/plus_sign_007.jpg"
          onClick={()=>onIncreaseQuantity(product)}
          />
          <img 
          alt="decrease"
          className="action-icons" 
          src="https://t4.ftcdn.net/jpg/05/66/27/11/360_F_566271163_Jv08oOaFmOJ4XqdDgWoQaCHDeuyRaliA.jpg"
          onClick={()=>onDecreaseQuantity(product)}/>
          <img 
          alt="delete"
          className="action-icons" 
          src="https://www.shutterstock.com/image-vector/trash-delete-icon-isolated-on-260nw-1937456671.jpg"
          onClick={()=>onDeleteProduct(product.id)}
          />
        </div>
      </div>

    </div>
    )
  }


const styles={
   image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
   }
}
export default CartItem;


