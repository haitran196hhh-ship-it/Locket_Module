export default function handler(req, res) {
    const defaultImg = "https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/assets/custom_frame.png";
    const imageUrl = (req.query.img || defaultImg).trim();
    const frameName = (req.query.name || "Tùy Chỉnh").trim();
    const timestamp = Date.now();
    const encodedImg = encodeURIComponent(imageUrl);

    // Tạo dấu thời gian Giờ:Phút:Giây theo múi giờ Việt Nam để phân biệt tên Module mới và cũ
    const timeTag = new Date(timestamp + 7 * 3600 * 1000).toISOString().slice(11, 19);

    const moduleContent = `#!name=👑 Khung ${frameName} [${timeTag}] (TranHai307)
#!desc=Mở khóa Gold, Quay & Up Video 60s Siêu Nét, Full Filter AI, Khung Widget (${frameName}) & Chống thu hồi All-in-One.
#!author=Trần Hải (TranHai307 • @trh_ltg)

[General]
bypass-system = true
skip-proxy = *.local, *.crashlytics.com
tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12
dns-server = https://dns.cloudflare.com/dns-query, https://dns.google/dns-query

[Rule]
DOMAIN, ocsp.apple.com, REJECT
DOMAIN, ocsp2.apple.com, REJECT
DOMAIN, valid.apple.com, REJECT
DOMAIN, crl.apple.com, REJECT
DOMAIN, certs.apple.com, REJECT
DOMAIN, appattest.apple.com, REJECT
DOMAIN-SUFFIX, ocsp.apple.com, REJECT

[Header Rewrite]
^https?://api.revenuecat.com/.+/(receipts$|subscribers/?(.*?)*$) header-del x-revenuecat-etag
^https?://api.revenuecat.com/.+/(receipts$|subscribers/?(.*?)*$) header-del X-RevenueCat-ETag

[Script]
revenuecat = type=http-response, pattern=^https:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts$|subscribers\\/[^/]+$), script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/js/Locket_TranHai307.js?v=${timestamp}, requires-body=true, max-size=-1, timeout=60

deleteHeader = type=http-request, pattern=^https:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/js/deleteHeader.js?v=${timestamp}, timeout=60

locket_rc = type=http-response, pattern=^https:\\/\\/firebaseremoteconfig\\.googleapis\\.com\\/v1\\/projects\\/locket-4252a\\/.+, script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/js/Locket_Unlocked.js?v=${timestamp}, argument=frame=${encodedImg}, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com, firebaseremoteconfig.googleapis.com
`;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.status(200).send(moduleContent);
}
