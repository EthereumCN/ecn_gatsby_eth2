import React from "react"
import { Accordion, AccordionItem, PseudoBox, Text } from "@chakra-ui/core"
import Secondline from "./secondline"
import Thirdline from "./thirdline"
import Fourthline from "./fourthline"
import Fifthline from "./fifthline"
import Sixthline from "./sixthline"
import Seventhline from "./seventhline"
import Eigthline from "./eigthline"
import Nineline from "./nineline"
import Tenline from "./tenline"
import Elevenline from "./elevenline"
import Twelveline from "./twelve"
import Thirteen from "./thirteen"
import Fourteen from "./fourteen"
import Fifteen from "./fifteen"
import Sixteen from "./sixteen"
import Seventeen from "./seventeen"
import Eighteen from "./eighteen"
import { Link } from "gatsby"
const Sidebar = () => {
  return (
    // 总得sidebar
    <Accordion defaultIndex={[0]} allowMultiple>
      {/* 第一行 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/hello_eth2" style={{ display: "block", width: "100%" }}>
          ETH2.0概览
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 第二行 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/eth2-glossary" style={{ display: "block", width: "100%" }}>
          ETH2术语库
          </Link>
        </PseudoBox>
      </AccordionItem>


        {/* 第3行 */}
        <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/eth2-chang-jian-wen-ti-jie-da" style={{ display: "block", width: "100%" }}>
          Eth2常见问题解答
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 第三行 */}


      <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
          ETH2.0 客户端
        </Text>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/teams-building-eth2/prysmatic-labs/" style={{ display: "block", width: "100%" }}>
          Prysm - Prysmatic Labs
          </Link>
        </PseudoBox>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/teams-building-eth2/pegasys/" style={{ display: "block", width: "100%" }}>
          Teku - ConsenSys
          </Link>
        </PseudoBox>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/teams-building-eth2/sigma-prime/" style={{ display: "block", width: "100%" }}>
          Lighthouse - Sigma Prime
          </Link>
        </PseudoBox>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/teams-building-eth2/status/" style={{ display: "block", width: "100%" }}>
          Nimbus - Status
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 第五行  */}
      <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
          STAKING
        </Text>
        <Fourthline/>

        <Fifthline/>

{/* FAQ */}
<PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/staking/faq/" style={{ display: "block", width: "100%" }}>
          验证者 FAQ
          </Link>
        </PseudoBox>


        {/* 相关资源 */}
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/staking/zi-yuan/" style={{ display: "block", width: "100%" }}>
          相关资源
          </Link>
        </PseudoBox>

        
      </AccordionItem>




    {/* 第6行  */}
    <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
         研究室
        </Text>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/eth2-researches/casper/" style={{ display: "block", width: "100%" }}>
          Casper Proof-of-Stake
          </Link>
        </PseudoBox>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/eth2-researches/https-knol.ethereum.cn-research-and-developement-sharding/" style={{ display: "block", width: "100%" }}>
          Sharding 分片
          </Link>
        </PseudoBox>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/eth2-researches/eth2-migration/" style={{ display: "block", width: "100%" }}>
          Eth1->Eth2 迁移
          </Link>
        </PseudoBox>
       
        
      </AccordionItem>


      {/* 基础工具 */}
      <Secondline />

  <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/eth2-researches/eth2-jing-ji-xue/" style={{ display: "block", width: "100%" }}>
          Eth2 经济学
          </Link>
        </PseudoBox>

  {/* 第7行  */}
  <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
         新闻间
        </Text>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <a target="_blank" href="https://news.ethereum.cn/" style={{ display: "block", width: "100%" }}>
         以太坊周刊
          </a>
        </PseudoBox>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <a target="_blank" href="https://news.ethereum.cn/" style={{ display: "block", width: "100%" }}>
          以太坊双周刊
          </a>
        </PseudoBox>
       
       
        
      </AccordionItem>



      {/* 第六行  智能合约语音*/}
      <Thirdline />




  {/* 第7行  */}
  <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
         既往，开来
        </Text>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/history-future/eth-1.x/" style={{ display: "block", width: "100%" }}>
          ETH 1.x
          </Link>
        </PseudoBox>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/history-future/eth3.0/" style={{ display: "block", width: "100%" }}>
          ETH 3
          </Link>
        </PseudoBox>
       
       
        
      </AccordionItem>



      {/* 延伸阅读 */}
      <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
          延伸阅读
        </Text>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/extended-resources/phase-0-gui-fan-tu-shi/" style={{ display: "block", width: "100%" }}>
          Phase 0 规范图示
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 以太坊设计原理 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/extended-resources/phase-0-gui-fan-tu-shi/" style={{ display: "block", width: "100%" }}>
          Phase 0 规范图示
          </Link>
        </PseudoBox>
      </AccordionItem>
      
    </Accordion>
  )
}

export default Sidebar
