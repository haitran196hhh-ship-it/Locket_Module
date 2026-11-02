export default function handler(req, res) {
    const defaultImg = "https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/assets/custom_frame.png";
    const imageUrl = (req.query.img || defaultImg).trim();
    const frameName = (req.query.name || "Tùy Chỉnh").trim();
    const timestamp = Date.now();

    const moduleContent = `#!name=👑 Locket Khung: ${frameName} (TranHai307)
#!desc=Mở khoá Locket Gold, Tải ảnh/video từ Camera Roll, Video 60s, Full Filter & Khung Widget (${frameName}).
#!author=haitran196hhh

[Script]
# 1. Kích hoạt Locket Gold (RevenueCat)
revenuecat = type=http-response, pattern=^https:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts$|subscribers\\/[^/]+$), script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/refs/heads/main/js/Locket_DuyVinh09.js, requires-body=true, max-size=-1, timeout=60

# 2. Xóa header ETag tránh bị lưu cache gói cũ
deleteHeader = type=http-request, pattern=^https:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/refs/heads/main/js/deleteHeader.js, timeout=60

# 3. Kích hoạt Camera Roll, Video 60s, Full Filter & Khung Widget Động (Firebase Remote Config)
locket_rc = type=http-response, pattern=^https:\\/\\/firebaseremoteconfig\\.googleapis\\.com\\/v1\\/projects\\/locket-4252a\\/.+, script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/refs/heads/main/js/Locket_Unlocked.js?v=${timestamp}, argument=${imageUrl}, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com, firebaseremoteconfig.googleapis.com
`;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.status(200).send(moduleContent);
}
