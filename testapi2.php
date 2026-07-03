<?php
    error_reporting(E_ALL);
 
$url = "https://uat-nsws-mnstrportal.investindia.gov.in/nsws_license/getLicensesList";
//$url = "https://65.1.33.103/nsws_license/getLicensesList";
//$url = "https://13.126.86.80/nsws_license/getLicensesList";
echo $url;

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

$apiKey = "Min1@GLL08";
$accessid = "MIN_TEST_0";
$accesssecret="MintesT@1234";


$authHeaders = array();
$authHeaders[] = 'Content-Type: application/json';
$authHeaders[] = 'api-key: '.$apiKey;
$authHeaders[] = 'access-id: '.$accessid;
$authHeaders[] = 'access-secret: '.$accesssecret;
echo "<br><br><u>Headerinfo</u>";

echo "<pre>"; print_r($authHeaders); echo "</pre>";

curl_setopt($ch, CURLOPT_HTTPHEADER,$authHeaders);   
$data = <<<DATA
{
    "ministryStateId": "M034",
	"deptId": "M034_D000",
    "wingId": "M034_D000_WNG02"
}
DATA;

echo "<br><br><u>Raw Body Data</u>";
echo "<pre>"; print_r($data); echo"</pre>";
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch,CURLOPT_POST,1);
$exec = curl_exec($ch);
echo "<br><br><u>Responce data</u><br><br>";
//echo '<pre>';
print_r($exec);
if(curl_errno($ch))
    echo 'Curl error: '.curl_error($ch);
curl_close($ch);
?>
