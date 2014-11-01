<?php
//公共配置
$common_config = include APP_PATH.'Common/Conf/config.php';

//私有配置
$private_config = array(
                        'API_ADDRESS' => 'http://localhost/webapp/public/api.php',
                        'Platfomr'=>'c838aea9f6df5d8b7aaab37dec6fd66d',
                        'Group'=>'79191c33ce40c02800cbf43672f58a47',
                        'Company'=>'93cc5eccafe675465cf94d3df1258d42',
                        'PAGE_SIZE'=>10,
                        'LAYOUT_ON' => false,
                        'URL_ROUTER_ON' => true,
                        'ACTION_SUFFIX'         =>  'Action',
                        'URL_CASE_INSENSITIVE' =>true,
                        'URL_ROUTE_RULES' => array(

                                                  )
                        );

return array_merge($common_config, $private_config);
