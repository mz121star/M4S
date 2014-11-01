<?php
function getPage($url = '', $method = 'get', $data = array()) {
    if (!$url) {
    return '';
    }
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    if ($method == 'post' || $method == 'put'||$method=='POST') {

        curl_setopt($ch, CURLOPT_POST, 1);

        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    }
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}
?>