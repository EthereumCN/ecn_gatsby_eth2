import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Box,
  PseudoBox,
  Icon,
} from "@chakra-ui/core";
import { Link } from "gatsby";

const Fifthline = () => {
  return (
    <>
      <AccordionItem border="0">
        {({ isExpanded }) => (
          <>
            <AccordionHeader p={0} borderRadius="0.3rem" _focus="boxShadow:0px">
              <PseudoBox
                borderRadius="0.3rem"
                flex="1"
                display="flex"
                cursor="pointer"
                py="8px"
                px="16px"
                textAlign="left"
                _hover={{
                  color: "orange.300",
                  paddingLeft: "25px",
                  transition: " all 0.1s linear",
                  bg: "rgb(233,233,233)",
                }}
              >
                <Box flex="1" textAlign="left">
                  <Link
                    to="/staking/jiao-cheng/"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    教程
                  </Link>
                </Box>
                <Icon
                  fontSize="1.3rem"
                  name={isExpanded ? "chevron-down" : "chevron-right"}
                />
              </PseudoBox>
            </AccordionHeader>
            {/* 子项 */}
            <AccordionPanel py="0">
              <Accordion defaultIndex={[0]} allowMultiple>
                {/* 第一栏 */}
                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/staking/jiao-cheng/ying-jian-pei-zhi/"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          硬件配置
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第二栏 */}

                <AccordionItem border="0">
                  {({ isExpanded }) => (
                    <>
                      <AccordionHeader
                        p={0}
                        borderRadius="0.3rem"
                        _focus="boxShadow:0px"
                      >
                        <PseudoBox
                          borderRadius="0.3rem"
                          flex="1"
                          display="flex"
                          cursor="pointer"
                          py="8px"
                          px="16px"
                          textAlign="left"
                          _hover={{
                            color: "orange.300",
                            paddingLeft: "25px",
                            transition: " all 0.1s linear",
                            bg: "rgb(233,233,233)",
                          }}
                        >
                          <Box flex="1" textAlign="left">
                            <Link
                              to="/staking/jiao-cheng/ce-shi-wang-zhi-ya-jiao-cheng/"
                              style={{
                                display: "block",
                                width: "100%",
                              }}
                            >
                              测试网质押教程
                            </Link>
                          </Box>
                          <Icon
                            fontSize="1.3rem"
                            name={isExpanded ? "chevron-down" : "chevron-right"}
                          />
                        </PseudoBox>
                      </AccordionHeader>
                      {/* 子项 */}
                      <AccordionPanel py="0">
                        <Accordion defaultIndex={[0]} allowMultiple>
                          {/* 第一栏 */}
                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/staking/jiao-cheng/ce-shi-wang-zhi-ya-jiao-cheng/teku/"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Teku
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 第二栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/staking/jiao-cheng/ce-shi-wang-zhi-ya-jiao-cheng/lighthouse/"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Lighthouse
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 第三栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/staking/jiao-cheng/ce-shi-wang-zhi-ya-jiao-cheng/prysm/"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Prysm
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 第四栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/staking/jiao-cheng/ce-shi-wang-zhi-ya-jiao-cheng/nimbus/"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Nimbus
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>




                        </Accordion>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

                {/* 第三栏 */}

                <AccordionItem border="0">
                  {({ isExpanded }) => (
                    <>
                      <AccordionHeader
                        p={0}
                        borderRadius="0.3rem"
                        _focus="boxShadow:0px"
                      >
                        <PseudoBox
                          borderRadius="0.3rem"
                          flex="1"
                          display="flex"
                          cursor="pointer"
                          py="8px"
                          px="16px"
                          textAlign="left"
                          _hover={{
                            color: "orange.300",
                            paddingLeft: "25px",
                            transition: " all 0.1s linear",
                            bg: "rgb(233,233,233)",
                          }}
                        >
                          <Box flex="1" textAlign="left">
                            <Link
                              to="/staking/jiao-cheng/zhu-wang-zhi-ya-jiao-cheng/"
                              style={{
                                display: "block",
                                width: "100%",
                              }}
                            >
                              主网质押教程
                            </Link>
                          </Box>
                          <Icon
                            fontSize="1.3rem"
                            name={isExpanded ? "chevron-down" : "chevron-right"}
                          />
                        </PseudoBox>
                      </AccordionHeader>
                      {/* 子项 */}
                      <AccordionPanel py="0">
                        <Accordion defaultIndex={[0]} allowMultiple>
                          {/* 第一栏 */}
                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/staking/jiao-cheng/zhu-wang-zhi-ya-jiao-cheng/teku/"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Teku
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 第二栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/staking/jiao-cheng/zhu-wang-zhi-ya-jiao-cheng/lighthouse/"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Lighthouse
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 第三栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/staking/jiao-cheng/zhu-wang-zhi-ya-jiao-cheng/prysm/"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Prysm
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 第四栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/staking/jiao-cheng/zhu-wang-zhi-ya-jiao-cheng/nimbus/"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Nimbus
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>




                        </Accordion>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>               






              </Accordion>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  );
};

export default Fifthline;
