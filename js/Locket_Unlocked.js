// ============================================================
// Locket Remote Config Rewrite - Bản Cực Hạn (Video 60s, Không Giới Hạn MB, Khung Động & Filter Hot Trend)
// Mod by: TranHai307
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = {};
try {
    obj = JSON.parse($response.body || "{}");
} catch (e) {
    obj = {};
}

if (ua.includes("Locket") || obj.entries) {
    obj.Attention = "Chúc mừng bạn! Bản Mod độc quyền bởi TranHai307!";
    obj.entries = obj.entries || {};
    obj.state = "UPDATE"; // Ép Locket luôn cập nhật cấu hình mới từ Remote Config

    // ============================================================
    // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL (POPUP KHÁ BẢNH)
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            longer_videos: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled",
            camera_filters: "enabled",
            high_quality_video: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true,
            longer_video: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: "LOCKET GOLD",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "Lên Locket Gold rồi NHA 😎",
            feature_set: [
                {
                    title: "IUUUUUU✨",
                    body: " TRẦN HẢI NÈ BÉ IU 💛 (TikTok: @trh_ltg)",
                    imageURL: "https://i.ibb.co/Q7P3NNYF/Vi-sao-Kha-Banh-tro-thanh-hien-tuong-dinh-dam-tren-mang-xa-hoi-khabanh-1554192528-width660height597.jpg"
                }
            ],
            primary_button_title: "Xong",
            campaign: "locket_gold_welcome_tranhai_" + Date.now(),
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true"
    });

    // ============================================================
    // 2. CHẶN QUẢNG CÁO & SENTRY
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0",
        history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
    });

    // ============================================================
    // 3. PHÁ GIỚI HẠN VIDEO 10S & MỞ KHÓA FULL FILTER CAMERA
    // ============================================================
    var allFilterIds = [
        "looks_maxxing", "influencer", "cutesy", "sticker_face", "flower_crown",
        "love_bug", "disco_lights", "cash_money", "okay_wig", "toothless",
        "bye_brows", "bowling_ball", "blonde_bleached", "beard", "bob_cut",
        "buns", "tatted", "mohawk", "braces", "slimed",
        "princess", "happy_birthday", "wedding", "cowboy_cowgirl", "giraffe",
        "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
        "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
    ];

    Object.assign(obj.entries, {
        // Phá giới hạn "Vui lòng chọn video dài tối đa 10 giây"
        max_video_duration: "60",
        video_max_duration: "60",
        gold_max_video_duration: "60",
        free_max_video_duration: "60",
        camera_max_video_duration: "60",
        camera_roll_max_video_duration: "60",
        camera_roll_trim_max_duration: "60",
        moment_video_max_duration: "60",
        longer_video_max_duration: "60",
        video_duration_limit: "60",
        camera_roll_video_duration_limit: "60",
        max_video_length: "60",
        longer_video_enabled: "true",
        longer_videos_enabled: "true",
        longer_camera_roll_videos_enabled: "true",
        video_upload_max_size_mb: "500",
        video_max_file_size_bytes: "524288000",

        camera: JSON.stringify({
            gold_max_duration: 60,
            goldMaxDuration: 60,
            free_max_duration: 60,
            freeMaxDuration: 60,
            max_duration: 60,
            maxDuration: 60,
            video_max_duration: 60,
            videoMaxDuration: 60,
            ultra_wide: true,
            ultraWide: true,
            volume_button: true,
            volumeButton: true,
            flash_button: true,
            telephoto: true,
            srgb: true,
            lanczos: true,
            quality_mbps: 15.0,
            qualityMbps: 15.0
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: 60,
            goldMaxDuration: 60,
            free_max_duration: 60,
            freeMaxDuration: 60,
            video_max_duration: 60,
            videoMaxDuration: 60,
            max_duration: 60,
            maxDuration: 60,
            trim_max_duration: 60,
            trimMaxDuration: 60,
            camera_roll_max_duration: 60,
            cameraRollMaxDuration: 60,
            max_video_duration: 60,
            maxVideoDuration: 60,
            quality_mbps: 15.0,
            qualityMbps: 15.0,
            flash_button: true
        }),
        live_photos: JSON.stringify({ capture: true, video: true, viewing: true, catch_up: true, widget_looping_mode: "never" }),

        // Ép thanh trượt Filter ngoài màn hình Camera hiển thị toàn bộ Filter thay vì chỉ 3 cái mặc định
        default_filters: JSON.stringify(allFilterIds),
        camera_filters: JSON.stringify(allFilterIds),
        enabled_filters: JSON.stringify(allFilterIds),
        camera_filter_config: JSON.stringify({
            enabled: true,
            allows_custom_filters: true,
            show_filter_button: true,
            sheet_enabled: true,
            open_sheet_immediately: false,
            force_fetch_all_filters: true,
            precache_filters: true,
            default_filters: allFilterIds,
            picker_filters: allFilterIds,
            sheet_filters: [
                { title: { en: "🔥 Hot Trend", vi: "🔥 Hot Trend" }, filter_ids: ["looks_maxxing", "influencer", "cutesy", "sticker_face", "love_bug", "flower_crown", "disco_lights", "cash_money"] },
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
                { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
            ]
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "true",
        upload_main_image_quality: "1.0",
        upload_main_image_size: "2048",
        upload_thumbnail_image_quality: "0.95",
        upload_thumbnail_image_size: "1080"
    });

    // ============================================================
    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999999",
        celebrity_inbox_limit: "999999999",
        celebrity_inbox_enabled: "true",
        celebrity_vip_qr_redemption_enabled: "true",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "🌟🫶🌟" }, { threshold: 2000, emoji: "✨💟✨" }, { threshold: 5000, emoji: "⚡️😵‍💫⚡" }, { threshold: 10000, emoji: "✨⚡️😱⚡✨" } ]}),
        friend_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "✨💗✨" }, { threshold: 2000, emoji: "✨️⭐️✨" }, { threshold: 5000, emoji: "✨💎✨" }, { threshold: 10000, emoji: "✨🔐💛✨" } ]}),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true",
        signup_custom_profile_picture: "true",
        user_data_export_enabled: "true",
        username_suggestions_enabled: "true"
    });

    // ============================================================
    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        group_contact_invites_enabled: "true",
        groups_onboarding_accept_invite_preview_enabled: "true",
        chat_hyperlink_enabled_mode: "always_enabled",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        conversation_drafts_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    // ============================================================
    // 6. WIDGET KHUNG ẢNH ĐỘNG (ĐỒNG BỘ TỪ ARGUMENT)
    // ============================================================
    var rawArg = (typeof $argument !== "undefined" && $argument !== null) ? String($argument) : "";
    var customFrameUrl = "https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/assets/custom_frame.png";
    
    if (rawArg.includes("frame=")) {
        var extracted = rawArg.split("frame=")[1].split("&")[0].replace(/^"|"$/g, '').trim();
        try {
            customFrameUrl = decodeURIComponent(extracted);
        } catch (e) {
            customFrameUrl = extracted;
        }
    } else if (rawArg.startsWith("http")) {
        customFrameUrl = rawArg.replace(/^"|"$/g, '').trim();
    }

    // Tạo UID duy nhất theo tên file ảnh để ép Widget làm mới ngay lập tức
    var urlHash = customFrameUrl.replace(/[^a-zA-Z0-9]/g, '').slice(-14);
    var dynamicUid = "tranhai_frame_" + urlHash + "_" + Math.floor(Date.now() / 60000);

    var frameEventObj = {
        uid: dynamicUid,
        url: customFrameUrl,
        image_url: customFrameUrl,
        imageURL: customFrameUrl,
        use_local_time_zone: true,
        placement: "overlay",
        start_at: "2020-01-01T00:00:00",
        end_at: "2099-12-31T23:59:59"
    };

    Object.assign(obj.entries, {
        widget_frame_event_enabled: "true",
        widget_frame_event_max_images: "10",
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenAlways",
        widget_frame_event: JSON.stringify(frameEventObj),
        widget_frame_events: JSON.stringify([frameEventObj]),
        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: false,
            compact_header: true,
            friends_button: false,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: false, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    // ============================================================
    // 7. HỆ THỐNG, CACHE & STORAGE CDN
    // ============================================================
    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000",
        image_cache_max_size: "400000000",
        history_cache_age_days: "1000",
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
        share_history_prompt_enabled: "false",
        use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true",
        persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true"
    });

    // ============================================================
    // 8. OVERLAY, KHUNG THỬ NGAY (NHƯ TRÊN ẢNH) & CUSTOM CAPTIONS
    // ============================================================
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location",
            "weather", "time", "streak", "star_sign", "party_time", "locket_count",
            "good_morning", "goodnight", "ootd", "miss_you", "custom", "halloween_2026"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "✨ Filter & Khung Thử Ngay Hot Trend",
                items: [
                    { overlay_id: "caption:danh_gia_5_sao", source: "remote", caption: { background: { colors: ["#F59E0B", "#EAB308"] }, icon: { data: "⭐", type: "emoji" }, max_lines: 1, text: "Đánh giá 5 sao", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:hello_kitty_pink_frame", source: "remote", caption: { background: { image: { type: "image", data: customFrameUrl, source: "url" }, colors: ["#FFB6C1", "#FF69B4"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "Hello Kitty Vibe 🌸", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:meo_gaming_frame", source: "remote", caption: { background: { image: { type: "image", data: "https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/assets/custom_frame.png", source: "url" }, colors: ["#1A2980", "#26D0CE"] }, icon: { data: "🎮", type: "emoji" }, max_lines: 1, text: "Gaming Cat VIP ⚡", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:shin_chan_cute", source: "remote", caption: { background: { image: { type: "image", data: "https://i.ibb.co/1Yt1Dzzy/Shin-chan-1.png", source: "url" }, colors: ["#FF416C", "#FF4B2B"] }, icon: { data: "🖍️", type: "emoji" }, max_lines: 1, text: "Shin-chan Siêu Quậy", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🏫 Học Sinh Ngô Quyền & 11A2",
                items: [
                    { overlay_id: "caption:ngo_quyen_1", source: "remote", caption: { background: { colors: ["#0F2027", "#203A43", "#2C5364"] }, icon: { data: "🏫", type: "emoji" }, max_lines: 1, text: "THPT Ngô Quyền - Đỉnh lưu Phú Quý", text_color: "#F6E07A", type: "static_content" } },
                    { overlay_id: "caption:ngo_quyen_2", source: "remote", caption: { background: { colors: ["#004D40", "#00897B"] }, icon: { data: "🔥", type: "emoji" }, max_lines: 1, text: "Học sinh Ngô Quyền - Oai phong lẫm liệt", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:ngo_quyen_3", source: "remote", caption: { background: { colors: ["#D32F2F", "#F44336"] }, icon: { data: "🏆", type: "emoji" }, max_lines: 1, text: "Tự hào học sinh Ngô Quyền", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:lop_11a2_1", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "💎", type: "emoji" }, max_lines: 1, text: "Lớp 11A2 đẳng cấp không?", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:lop_11a2_2", source: "remote", caption: { background: { colors: ["#FF416C", "#FF4B2B"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "11A2 - Sinh ra để tỏa sáng", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:lop_11a2_3", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "11A2 vô địch vũ trụ", text_color: "#111111", type: "static_content" } },
                    { overlay_id: "caption:chuyen_ban_a", source: "remote", caption: { background: { colors: ["#4B1248", "#F0C27B"] }, icon: { data: "📐", type: "emoji" }, max_lines: 1, text: "Dân khối A khô khan nhưng chân thành", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:di_hoc_nhu_di_choi", source: "remote", caption: { background: { colors: ["#34e89e", "#0f3443"] }, icon: { data: "🎒", type: "emoji" }, max_lines: 1, text: "Đi học như đi chơi", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:deadline_chua_xong", source: "remote", caption: { background: { colors: ["#cb2d3e", "#ef473a"] }, icon: { data: "💀", type: "emoji" }, max_lines: 1, text: "Deadline chất thành núi", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:hoc_hanh_cham_chi", source: "remote", caption: { background: { colors: ["#2980B9", "#6DD5FA", "#FFFFFF"] }, icon: { data: "🤓", type: "emoji" }, max_lines: 1, text: "Gương mặt vàng trong làng học chăm", text_color: "#1A2980", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Chuyên mục Tiệm Spa & Bà Chị 💆‍♀️",
                items: [
                    { overlay_id: "caption:co_tien_goi_dau", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "🫧", type: "emoji" }, max_lines: 1, text: "Cô tiên gội đầu", text_color: "#70445A", type: "static_content" } },
                    { overlay_id: "caption:goi_dau_duong_suy", source: "remote", caption: { background: { colors: ["#A0C4FF", "#BDE0FE", "#DFF3FF"] }, icon: { data: "🫠", type: "emoji" }, max_lines: 1, text: "Gội đầu dưỡng... suy", text_color: "#23466F", type: "static_content" } },
                    { overlay_id: "caption:khach_khoe_tho_liet", source: "remote", caption: { background: { colors: ["#343A40", "#6C757D"] }, icon: { data: "💀", type: "emoji" }, max_lines: 1, text: "Khách khỏe, thợ liệt", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:lam_dep_cho_doi", source: "remote", caption: { background: { colors: ["#80CBC4", "#B2DFDB"] }, icon: { data: "💅", type: "emoji" }, max_lines: 1, text: "Đang bận làm đẹp cho đời", text_color: "#205953", type: "static_content" } },
                    { overlay_id: "caption:ban_tay_vang_massage", source: "remote", caption: { background: { colors: ["#F6D365", "#FDA085"] }, icon: { data: "👐", type: "emoji" }, max_lines: 1, text: "Bàn tay vàng làng massage", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:spa_my_huong", source: "remote", caption: { background: { colors: ["#E1BEE7", "#F8BBD0"] }, icon: { data: "🧖‍♀️", type: "emoji" }, max_lines: 1, text: "Tiệm Gội Nail Massage Mỹ Hương xin nghe", text_color: "#6A1B9A", type: "static_content" } },
                    { overlay_id: "caption:healing_time", source: "remote", caption: { background: { colors: ["#B7E4C7", "#D8F3DC"] }, icon: { data: "🌿", type: "emoji" }, max_lines: 1, text: "Healing time tại Spa", text_color: "#24563A", type: "static_content" } },
                    { overlay_id: "caption:spa_khong_loi_thoat", source: "remote", caption: { background: { colors: ["#FF4E50", "#F9D423"] }, icon: { data: "🚪", type: "emoji" }, max_lines: 1, text: "Spa không lối thoát", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:dau_lung_moi_goi", source: "remote", caption: { background: { colors: ["#D7CCC8", "#8D6E63"] }, icon: { data: "🥲", type: "emoji" }, max_lines: 1, text: "Đau lưng mỏi gối tê tay", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:vip_massage", source: "remote", caption: { background: { colors: ["#D4AF37", "#FFD700", "#F6E07A"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Gói VIP phục vụ tận răng", text_color: "#1A1A1A", type: "static_content" } }
                ]
            },
            {
                section: "🎨 General",
                items: [
                    { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                    { overlay_id: "caption:link", source: "local", caption: { type: "link" }, overlay_type: "caption" },
                    { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                    { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                    { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                    { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                    { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                    { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                    { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                    { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                    { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                    { overlay_id: "caption:live", source: "local", caption: { type: "live" } },
                    { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } }
                ]
            },
            {
                section: "🎨 Tùy chỉnh by TranHai307",
                items: [
                    { overlay_id: "caption:tin_nong_news", source: "remote", caption: { background: { colors: ["#800000", "#C70039", "#FF1E56"] }, icon: { type: "image", data: "https://img.icons8.com/fluency/96/news.png", source: "url" }, max_lines: 1, text: "BẢN TIN 24/7 🚨", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:em_oi_chuyen_do", source: "remote", caption: { background: { colors: ["#2C0B4D", "#6A0572", "#AB83A1"] }, icon: { data: "https://img.icons8.com/color/96/mute.png", source: "url", type: "image" }, max_lines: 1, text: "Em ơi cái chuyện đó... 🫣", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:tau_moi_may_ra_ngoai", source: "remote", caption: { background: { colors: ["#111111", "#8B0000", "#E50914"] }, icon: { data: "https://img.icons8.com/color/96/door-opened.png", source: "url", type: "image" }, max_lines: 1, text: "Tau mời mày ra ngoài 👉🚪", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:may_toan_noi_oi_doi_oi", source: "remote", caption: { background: { colors: ["#E65100", "#FF8F00", "#FFC107"] }, icon: { data: "https://img.icons8.com/fluency/96/clown.png", source: "url", type: "image" }, max_lines: 1, text: "Mầy toàn nói mấy câu ới dời ơi 🤦‍♂️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:quang_da_noi_the", source: "remote", caption: { background: { colors: ["#241C10", "#8C6D23", "#D4AF37", "#F6E07A"] }, icon: { data: "https://img.icons8.com/fluency/96/crown.png", source: "url", type: "image" }, max_lines: 1, text: "Hải đã nói thế thì ok đi em 👑", text_color: "#1A1A1A", type: "static_content" } },
                    { overlay_id: "caption:love_vietnam", source: "remote", alt_text: "Tôi yêu Việt Nam", caption: { background: { image: { type: "image", data: "star_sign_background", source: "local" }, colors: ["#DA251D", "#DA251D"] }, icon: { data: "🇻🇳", type: "emoji" }, max_lines: 1, text: "Tôi yêu Việt Nam", text_color: "#FFFF00", type: "static_content" } },
                    { overlay_id: "caption:film_diary", source: "remote", alt_text: "Một ngày rất chill", caption: { background: { image: { type: "image", data: "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_camera_roll.png", source: "url" }, colors: ["#D2B48C", "#8B4513"] }, icon: { data: "🎞️", type: "emoji" }, max_lines: 1, text: "Một ngày rất chill", text_color: "#FFFDD0", type: "static_content" } },
                    { overlay_id: "caption:genz_flex", source: "remote", alt_text: "Mood: Chill", caption: { background: { image: { type: "image", data: "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_widgets.png", source: "url" }, colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "📸", type: "emoji" }, max_lines: 1, text: "Mood: Chill 💅", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Tình yêu & Cơm chó 💕",
                items: [
                    { overlay_id: "caption:em_nho_anhh", source: "remote", caption: { background: { colors: ["#FF6B81", "#FF8E9E", "#FFB3C6"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "em nhớ anhh", text_color: "#8C1938", type: "static_content" } },
                    { overlay_id: "caption:nho_anh_phien", source: "remote", caption: { background: { colors: ["#F0B5CB", "#F6D0DF", "#DCCAF0"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "nhớ anh tới mức hơi phiền", text_color: "#70445A", type: "static_content" } },
                    { overlay_id: "caption:i_love_you", source: "remote", caption: { background: { colors: ["#FF8FAB", "#FFC2D1", "#FFE5EC"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "i love you", text_color: "#8A304F", type: "static_content" } },
                    { overlay_id: "caption:yeu_cuc_dang", source: "remote", caption: { background: { colors: ["#F2B5C8", "#F8D5D9", "#F6E5D2"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "yêu cục dàng", text_color: "#754454", type: "static_content" } },
                    { overlay_id: "caption:muon_duoc_om", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "🫂", type: "emoji" }, max_lines: 1, text: "Muốn được ôm", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:ngoai_le_cua_em", source: "remote", caption: { background: { colors: ["#80CBC4", "#B2DFDB", "#E0F2F1"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "anh là ngoại lệ của em", text_color: "#205953", type: "static_content" } },
                    { overlay_id: "caption:minh_cuoi_nhau", source: "remote", caption: { background: { colors: ["#F0B8CD", "#F7D4DF", "#E7C9EF"] }, icon: { data: "💍", type: "emoji" }, max_lines: 1, text: "hông ấy mình cưới nhau đi", text_color: "#70465B", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Gen Z & Hài hước 💅",
                items: [
                    { overlay_id: "caption:hom_nay_slay", source: "remote", caption: { background: { colors: ["#C5B5E8", "#DDD0F2", "#F0C9DD"] }, icon: { data: "✨", type: "emoji" }, max_lines: 1, text: "hôm nay cũng slay", text_color: "#514368", type: "static_content" } },
                    { overlay_id: "caption:dep_trai_co_gi_sai", source: "remote", caption: { background: { colors: ["#FF5722", "#FFC107"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Đẹp trai có gì sai", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "caption:oach_xa_lach", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "🥬", type: "emoji" }, max_lines: 1, text: "oách xà lách", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:hong_drama", source: "remote", caption: { background: { colors: ["#8A2387", "#E94057", "#F27121"] }, icon: { data: "🍿", type: "emoji" }, max_lines: 1, text: "Hóng drama", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:check_var", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "📺", type: "emoji" }, max_lines: 1, text: "Check VAR liền", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:so_ho_la_bao", source: "remote", caption: { background: { colors: ["#F5B8A9", "#F6D0B2", "#E8BFCB"] }, icon: { data: "🚨", type: "emoji" }, max_lines: 1, text: "sơ hở là báo", text_color: "#713F40", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Chứng nhận của Locket",
                items: [
                    { overlay_id: "caption:locket_xinh", source: "remote", caption: { background: { colors: ["#FFD45C", "#F5B91E"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "Locket xác nhận bạn xjnh gái", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:locket_dep", source: "remote", caption: { background: { colors: ["#258DEB", "#1672D4"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Locket xác nhận bạn đẹp chai", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:gai_dep", source: "remote", caption: { background: { colors: ["#FF91AE", "#F8759B"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Đã xác minh bạn là gái đẹp", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:trai_dep", source: "remote", caption: { background: { colors: ["#4A9FEF", "#267DD7"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Đã xác minh bạn là trai đẹp", text_color: "#FFFFFF", type: "static_content" } }
                ]
            }
        ])
    });
}

$done({ body: JSON.stringify(obj) });
