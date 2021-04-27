import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TreeList from '../Components/TreeList'
import Map from '../Components/Map'
import { getTreeData } from '../redux/actions.js'

function TreePage({treeArray, treeData}) {

  useEffect(() => {
    treeData()
  },[])

  return (
    <>
      <TreeList assets={treeArray}/>
      <Map assets={treeArray}/>
    </>
  )
}

const msp = (state) => {
  return { treeArray: state.trees }
}

const mdp = (dispatch) => {
  return {
    treeData: () => dispatch(getTreeData())

  }
}

export default connect(msp, mdp)(TreePage)