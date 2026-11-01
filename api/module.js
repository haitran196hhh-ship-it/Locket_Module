export default function handler(req, res) {
    const imageUrl = req.query.img || "https://i.ibb.co/1Yt1Dzzy/Shin-chan-1.png";
    const frameName = req.query.name || "Tùy Chỉnh";
    const timestamp = Date.now();

    const moduleContent = `#!name=Locket Khung ${frameName} (Trần Hải)
#!desc=Tự động gán khung, mở khóa Gold, Video 60s, Filter & Tích hợp DNS Chống thu hồi All-in-One.
#!author=Trần Hải

[General]
bypass-system = true
skip-proxy = *.local, *.crashlytics.com
tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12
# Cấu hình DNS bảo mật siêu nhanh (Thay vì dùng DNS máy)
dns-server = https://dns.cloudflare.com/dns-query, https://dns.google/dns-query

[Rule]
# === LUẬT CHỐNG THU HỒI CHỨNG CHỈ (DNS MỸ HƯƠNG/TRẦN HẢI) ===
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
revenuecat = type=http-response, pattern=^https:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts$|subscribers\\/[^/]+$), script-path=https://cdn.jsdelivr.net/gh/haitran196hhh-ship-it/Locket_Module@main/js/Locket_DuyVinh09.js, requires-body=true, max-size=-1, timeout=60

deleteHeader = type=http-request, pattern=^https:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts|subscribers), script-path=https://cdn.jsdelivr.net/gh/haitran196hhh-ship-it/Locket_Module@main/js/deleteHeader.js, timeout=60

locket_rc = type=http-response, pattern=^https:\\/\\/firebaseremoteconfig\\.googleapis\\.com\\/v1\\/projects\\/locket-4252a\\/.+, script-path=https://cdn.jsdelivr.net/gh/haitran196hhh-ship-it/Locket_Module@main/js/Locket_Unlocked.js?v=${timestamp}, argument=frame=${encodeURIComponent(imageUrl)}, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com, firebaseremoteconfig.googleapis.com
`;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(moduleContent);
}
