import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems'

const Collection = () => {
  const {products,search,showSearch}=useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [Subcategory,setSubcategory]=useState([]);
  const [sortType,setSortType]=useState('relavant');

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=> item !==e.target.value));
    }else{
      setCategory(prev=>[...prev,e.target.value]);
    }
  }

  const toggleSubcategory=(e)=>{
    if(Subcategory.includes(e.target.value)){
      setSubcategory(prev=>prev.filter(item=> item !==e.target.value));
    }else{
      setSubcategory(prev=>[...prev,e.target.value]);
    }
  }

  const applyFilter=()=>{
    let productCopy=products.slice();

    if (showSearch&&search) {
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length>0){
      productCopy=productCopy.filter(item=>category.includes(item.category));
    }

    if (Subcategory.length>0) {
      productCopy=productCopy.filter(item=>Subcategory.includes(item.subCategory));
    }

    setFilterProducts(productCopy);
  }

  const sortProduct=()=>{
    let fpCopy=filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
      default:
        applyFilter();
        break;    
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,Subcategory,search,showSearch,products]);

  useEffect(()=>{
    sortProduct();
  },[sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)}className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* CATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" id='Men' value={'Men'} onChange={toggleCategory} /><label htmlFor='Men'>Men</label>
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" id='Women' value={'Women'} onChange={toggleCategory}/><label htmlFor='Women' >Women</label>
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" id='Kids' value={'Kids'} onChange={toggleCategory}/><label htmlFor='Kids'>Kids</label>
            </p>
          </div>
        </div>
        {/* Subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" id='Topwear' value={'Topwear'} onChange={toggleSubcategory}/><label htmlFor='Topwear'>Topwear</label>
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" id='Bottomwear' value={'Bottomwear'} onChange={toggleSubcategory}/><label htmlFor='Bottomwear'>Bottomwear</label>
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" id='Winterwear' value={'Winterwear'} onChange={toggleSubcategory}/><label htmlFor='Winterwear'>Winterwear</label>
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavant">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
