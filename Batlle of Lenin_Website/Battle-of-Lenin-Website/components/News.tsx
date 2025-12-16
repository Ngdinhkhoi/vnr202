import React, { useState } from "react";

const NewsCard: React.FC<{
  title: string;
  tag: string;
  tagColor: string;
  link: string;
}> = ({ title, tag, tagColor, link }) => (
  <a
    href={link}
    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(0,0,0,0.65)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/40 hover:shadow-brand-gold/25"
  >
    <span className="absolute inset-0 bg-gradient-to-br from-brand-gold/15 via-transparent to-brand-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-70"></span>
    <div className="relative flex items-start justify-between">
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase text-gray-900 ${tagColor}`}
      >
        {tag}
      </span>
    </div>
    <h4 className="relative mt-6 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-brand-gold">
      {title}
    </h4>
  </a>
);

const News: React.FC = () => {
  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[#070912] py-24 text-gray-100"
    >
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-8 top-16 h-56 w-56 rounded-full bg-brand-gold/15 blur-3xl opacity-70"></span>
        <span className="absolute right-12 bottom-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl opacity-70"></span>
      </div>

      <div className="container relative mx-auto px-6">
        <div className="text-center">
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
            Đại hội đại biểu toàn quốc lần thứ V của Đảng và các bước đột phá
            tiếp tục đổi mới kinh tế 1982 - 1986
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard
            link="#"
            title="Bối Cảnh Lịch Sử "
            tag="📢 Phần I:"
            tagColor="bg-white text-gray-900"
          />
          <NewsCard
            link="#"
            title="Đại Hội Đại Biểu Toàn Quốc Lần Thứ V (1982) "
            tag="🆕 Phần II:"
            tagColor="bg-brand-gold text-gray-900"
          />
          <NewsCard
            link="#"
            title="Các Bước Đột Phá Tiếp Tục Đổi Mới Kinh Tế (1982 - 1986 )"
            tag="🎁 Phần III:"
            tagColor="bg-emerald-400 text-gray-900"
          />

          <NewsCard
            link="#"
            title="Ý Nghĩa Lịch Sử Và Đánh Giá  "
            tag="🆕 Phần IV:"
            tagColor="bg-brand-gold text-gray-900"
          />
        </div>

        {/* Phần I */}
        <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(0,0,0,0.65)]">
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/1 opacity-80"></span>
          <div className="relative space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Phần I: Bối Cảnh Lịch Sử
            </h3>

            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  I-1. Khái niệm
                </h4>
                {/* <p className="text-sm text-gray-300 mb-2">
                  Dân tộc (nation/ethnic group) được hiểu theo 2 nghĩa:
                </p> */}
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  <li>
                    Sau đại thắng mùa Xuân năm 1975, đất nước bước vào kỷ nguyên
                    mới: độc lập, thống nhất và đi lên chủ nghĩa xã hội. Tuy
                    nhiên, Việt Nam phải đối mặt với những thách thức to lớn từ
                    hậu quả nặng nề của chiến tranh, nền kinh tế kém phát triển
                    và cơ sở vật chất – kỹ thuật còn lạc hậu.
                  </li>
                  <li>
                    Trong giai đoạn đầu này, việc duy trì mô hình kinh tế kế
                    hoạch hóa tập trung, quan liêu bao cấp đã bộc lộ nhiều hạn
                    chế nghiêm trọng. Tình trạng sản xuất trì trệ, lưu thông ách
                    tắc đã khiến đời sống nhân dân gặp vô vàn khó khăn. Dù toàn
                    Đảng, toàn dân đã nỗ lực thực hiện Nghị quyết Đại hội IV và
                    đạt được một số thành tựu trong khôi phục kinh tế, nhưng
                    nhìn chung đất nước vẫn đứng trước tình hình khủng hoảng
                    kinh tế - xã hội gay gắt.
                  </li>
                  <li>
                    Thực tiễn bức thiết đó đòi hỏi Đảng phải nhìn thẳng vào sự
                    thật, điều chỉnh đường lối lãnh đạo, đặc biệt là trong lĩnh
                    vực kinh tế. Đây chính là bối cảnh quan trọng dẫn đến việc
                    triệu tập Đại hội đại biểu toàn quốc lần thứ V của Đảng.
                  </li>
                  <img
                    src="/background/phan1.jpg"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </ul>
              </div>

              {/* <div>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  I-2. Đặc trưng cơ bản
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  <li>
                    <strong>Cộng đồng về lãnh thổ</strong> (đối với dân tộc –
                    quốc gia).
                  </li>
                  <li>
                    <strong>Cộng đồng về kinh tế:</strong> có sự liên kết bền
                    vững trong hoạt động sản xuất, sinh hoạt vật chất.
                  </li>
                  <li>
                    <strong>Cộng đồng về ngôn ngữ:</strong> là công cụ giao tiếp
                    chung trong cộng đồng.
                  </li>
                  <li>
                    <strong>
                      Cộng đồng về văn hóa, tâm lý và ý thức dân tộc:
                    </strong>{" "}
                    hình thành bản sắc riêng, đoàn kết nội bộ và phân biệt với
                    cộng đồng khác.
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* Phần II */}
        <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(0,0,0,0.65)]">
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/1 opacity-80"></span>
          <div className="relative space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Phần II: Đại Hội Đại Biểu Toàn Quốc Lần Thứ V (1982)
            </h3>

            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  Thời gian & Địa điểm : Từ 27 đến 31/3/1982 tại Hà Nội.
                </h4>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  Quy mô : 1.033 đại biểu thay mặt cho hơn 1,7 triệu đảng viên
                  đến dự Đại hội có 47 đoàn đại biểu quốc tế
                </h4>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  Mục tiêu:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  <li>
                    Đại hội tiếp tục khẳng định con đường đi lên chủ nghĩa xã
                    hội, đề ra nhiệm vụ ổn định kinh tế – xã hội, từng bước cải
                    thiện đời sống nhân dân.
                  </li>
                  <li>
                    Đại hội xác định nông nghiệp là mặt trận hàng đầu, coi trọng
                    công nghiệp sản xuất hàng tiêu dùng và hàng xuất khẩu.
                  </li>
                  <li>
                    Bước đầu nhấn mạnh yêu cầu cải tiến quản lý kinh tế, khắc
                    phục cơ chế bao cấp, mở ra những chuyển biến mới trong tư
                    duy phát triển.
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  Chi tiết các báo cáo chính được trình bày trong Đại hội bao
                  gồm:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  <li>
                    Báo cáo chính trị của Ban Chấp hành Trung ương Đảng (do đồng
                    chí Lê Duẩn đọc).
                    <img
                      src="/background/7.png"
                      // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </li>
                  <li>
                    Báo cáo về nhiệm vụ kinh tế - xã hội (do đồng chí Phạm Văn
                    Đồng đọc).
                    <img
                      src="/background/8.png"
                      // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </li>
                  <li>
                    Báo cáo về xây dựng Đảng (do đồng chí Lê Đức Thọ đọc).
                  </li>
                  <img
                    src="/background/9.jpg"
                    // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </ul>

                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  1. Báo cáo chính trị của Ban Chấp hành Trung ương Đảng
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  <li>
                    Báo cáo chính trị đã đánh giá toàn diện những thắng lợi mà
                    Đảng và nhân dân ta đã giành được trong công cuộc xây dựng,
                    bảo vệ Tổ quốc từ sau đại thắng mùa xuân 1975. Nêu bật những
                    thành tựu trên các lĩnh vực: Chính trị - An ninh, Kinh tế &
                    Xã hội, Văn hóa & Giáo dục
                  </li>
                  <li>
                    Trên cơ sở phân tích hiện trạng của đất nước, Báo cáo chính
                    trị cũng vạch rõ những khó khăn của nước ta trong quá trình
                    phát triển và nguyên nhân:
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                      Khó Khăn:
                      <li>
                        Kinh tế mất cân đối nghiêm trọng trong 5 năm 1976-1980,
                        sản xuất chậm trong khi dân số tăng nhanh.
                      </li>
                      <li>
                        Thiếu lương thực, thực phẩm, hàng tiêu dùng; đời sống
                        nhân dân gặp nhiều khó khăn.
                      </li>
                      <li>
                        Văn hoá, giáo dục còn bị xem nhẹ; pháp chế, kỷ luật còn
                        lỏng lẻo.
                      </li>
                      Nguyên nhân : Là do sai lầm, khuyết điểm của các cơ quan
                      Đảng và Nhà nước
                      <li>
                        Chủ quan, nóng vội, đề ra chỉ tiêu quá cao (về quy mô và
                        tốc độ).
                      </li>
                      <li>Duy trì quá lâu cơ chế quan liêu bao cấp.</li>
                      <li>
                        Bảo thủ, trì trệ, không nhạy bén với những thay đổi thực
                        tế.
                      </li>
                    </ul>
                    Trong giai đoạn này, Đảng xác định nhiệm vụ hàng đầu là xây
                    dựng Chủ nghĩa Xã hội, song hành mật thiết với yêu cầu củng
                    cố quốc phòng an ninh. Cụ thể, chiến lược phát triển kinh tế
                    - xã hội giai đoạn 1981-1985 và cả thập niên 80 tập trung
                    vào các trụ cột chính:
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                      <li>
                        Về đời sống: Giải quyết các vấn đề cấp bách nhằm ổn định
                        và từng bước cải thiện đời sống vật chất, văn hóa cho
                        nhân dân.
                      </li>
                      <li>
                        Về cơ cấu kinh tế: Ưu tiên phát triển mạnh nông nghiệp,
                        công nghiệp hàng tiêu dùng và hàng xuất khẩu. Đây là
                        bước chuẩn bị thiết yếu về hạ tầng và kỹ thuật để tạo đà
                        cho công nghiệp nặng phát triển trong giai đoạn sau.
                      </li>
                      <li>
                        Về quan hệ sản xuất: Hoàn thành cải tạo xã hội chủ nghĩa
                        tại miền Nam và hoàn thiện quan hệ sản xuất tại miền
                        Bắc.
                      </li>
                      <li>
                        Về an ninh: Đảm bảo mọi nhu cầu kinh tế phục vụ cho quốc
                        phòng, giữ vững chủ quyền và trật tự an toàn xã hội.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  2. Báo cáo về nhiệm vụ kinh tế - xã hội trong 5 năm
                  (1981-1985)
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  Trong 5 năm 1981-1985, Đảng cần tập trung lực lượng thực hiện
                  những nhiệm vụ kinh tế - xã hội chủ yếu sau đây:
                  <li>
                    Ổn định Đời sống và Sản xuất: Tập trung toàn lực giải quyết
                    các nhu cầu thiết yếu để cải thiện đời sống nhân dân; đồng
                    thời quy hoạch lại sản xuất và cải tiến khâu lưu thông hàng
                    hóa.
                  </li>
                  <li>
                    Xây dựng cơ bản và Tiết kiệm: Điều chỉnh lại quy mô xây dựng
                    cơ bản sao cho vừa sức và hiệu quả, tập trung vào các mục
                    tiêu trọng điểm; đồng thời quán triệt tinh thần tiết kiệm
                    nghiêm ngặt trong mọi hoạt động sản xuất và đầu tư.
                  </li>
                  <li>
                    Cải cách và Hợp tác quốc tế: Tiếp tục đẩy mạnh công cuộc cải
                    tạo xã hội chủ nghĩa và đổi mới cơ chế quản lý kinh tế; song
                    song với việc thắt chặt quan hệ hợp tác toàn diện với Liên
                    Xô, Lào, Campuchia và các nước trong khối tương trợ kinh tế.
                  </li>
                  <li>
                    Phát triển toàn diện và An ninh quốc phòng: Đưa nhanh tiến
                    bộ khoa học kỹ thuật vào đời sống, chấn hưng văn hóa, y tế
                    và giáo dục; kết hợp chặt chẽ kinh tế với quốc phòng để vừa
                    bảo vệ Tổ quốc, vừa giữ vững kỷ cương và trật tự an toàn xã
                    hội.
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  3. Báo cáo về xây dựng Đảng của Ban Chấp hành Trung ương
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  Để tạo ra sự chuyển biến sâu sắc trong 5 năm tới, Báo cáo xác
                  định cần tập trung thực hiện:
                  <li>
                    Nâng cao năng lực lãnh đạo toàn diện: Đảm bảo sự thấu suốt
                    về đường lối, tập trung nâng cao năng lực tổ chức thực hiện
                    trên mọi mặt trận (kinh tế, xã hội, an ninh - quốc phòng),
                    trong đó kinh tế là trọng tâm.
                  </li>
                  <li>
                    Đổi mới cơ chế và tinh gọn bộ máy: Cải tiến phương thức lãnh
                    đạo gắn liền với việc đổi mới cơ chế quản lý kinh tế; đồng
                    thời tinh giản bộ máy Đảng và Nhà nước hoạt động hiệu quả
                    hơn.
                  </li>
                  <li>
                    Củng cố cơ sở và thanh lọc đội ngũ: Xây dựng tổ chức Đảng
                    vững mạnh từ cấp cơ sở (xã, phường, đơn vị kinh doanh) gắn
                    với các phong trào quần chúng. Kiên quyết đưa ra khỏi Đảng
                    những đảng viên cơ hội, thoái hóa, biến chất.
                  </li>
                  <li>
                    Chiến lược cán bộ bài bản: Thực hiện quy hoạch, đào tạo và
                    bồi dưỡng cán bộ kế cận đảm bảo tính kế thừa. Xây dựng đội
                    ngũ cốt cán vững vàng về phẩm chất lẫn năng lực trước mọi
                    tình huống.
                  </li>
                  <li>
                    Siết chặt kỷ cương và đoàn kết: Giữ gìn truyền thống đoàn
                    kết thống nhất; thực hiện nghiêm nguyên tắc tập trung dân
                    chủ và chế độ tự phê bình, phê bình trong sinh hoạt Đảng.
                  </li>
                </ul>
                {/* <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  <li>
                    Dân tộc là sản phẩm của lịch sử, hình thành cùng sự phát
                    triển của phương thức sản xuất.
                  </li>
                  <li>
                    Trong chủ nghĩa xã hội, vấn đề dân tộc phải được giải quyết
                    trên nguyên tắc:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Bình đẳng giữa các dân tộc</li>
                      <li>Đoàn kết giữa các dân tộc</li>
                      <li>
                        Tôn trọng quyền tự quyết chính đáng của các dân tộc
                      </li>
                    </ul>
                  </li>
                  <li>
                    Khi xóa bỏ áp bức giai cấp, sẽ tạo điều kiện căn bản để xóa
                    bỏ áp bức dân tộc, nhưng không đồng nghĩa rằng khác biệt văn
                    hóa bị xóa bỏ — mà phải bảo tồn bản sắc dân tộc trong sự
                    thống nhất quốc gia.
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>

        {/* Phần III */}
        <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(0,0,0,0.65)]">
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/1 opacity-80"></span>
          <div className="relative space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Phần III: Các Bước Đột Phá Tiếp Tục Đổi Mới Kinh Tế (1982 – 1986)
            </h3>

            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-lg  text-brand mb-2">
                  Giai đoạn 1982 – 1986 đánh dấu những tìm tòi, thử nghiệm quan
                  trọng của Đảng để từng bước tháo gỡ khó khăn, chuyển đổi từ cơ
                  chế cũ sang cơ chế mới. Quá trình này được thể hiện qua 3 bước
                  đột phá lớn:
                </h4>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  1. Bước đột phá thứ nhất: Các Hội nghị Trung ương năm 1984
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  <li>
                    Năm 1984, trước yêu cầu cấp bách của thực tiễn, Trung ương
                    Đảng đã có những điều chỉnh quan trọng về tư duy kinh tế:
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                      <li>
                        Hội nghị Trung ương 6 (1984):
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                          <li>
                            Tập trung đẩy mạnh thu mua, nắm vững nguồn hàng và
                            quản lý chặt chẽ thị trường tự do.
                          </li>
                          <li>
                            Thực hiện điều chỉnh giá cả, tiền lương và tài chính
                            sao cho phù hợp với tình hình thực tế lúc bấy giờ.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Hội nghị Trung ương 7 (Tháng 12/1984):
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                          <li>
                            Tiếp tục xác định nông nghiệp là mặt trận hàng đầu,
                            trong đó ưu tiên số một là sản xuất lương thực, thực
                            phẩm.
                          </li>
                          <li>
                            Đề ra chủ trương xóa bỏ cơ chế tập trung quan liêu,
                            hành chính, bao cấp.
                          </li>
                          <li>
                            Xác định "Giá - Lương - Tiền" là khâu đột phá để
                            chuyển nền kinh tế sang cơ chế hạch toán, kinh doanh
                            xã hội chủ nghĩa.
                          </li>
                              <img
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            src="/background/hoi-nghi-7.jpg"
                            alt=""
                          />
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Các dân tộc có bản sắc văn hóa, ngôn ngữ, phong tục khác
                    nhau
                  </li>
                  <li>
                    Cư trú phân tán và xen kẽ giữa các dân tộc, chủ yếu ở miền
                    núi, cao nguyên, vùng biên giới, vùng sâu – vùng xa
                  </li>
                  <li>
                    Trình độ phát triển không đồng đều giữa các dân tộc do điều
                    kiện lịch sử và địa lý
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  2. Bước đột phá thứ hai: Hội nghị Trung ương 8, khóa V (Tháng
                  6/1985)
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  Chủ trương chính:
                  <li>Quyết tâm xóa bỏ cơ chế tập trung quan liêu, bao cấp.</li>
                  <li>Xóa bỏ chế độ tem phiếu.</li>
                  <li>
                    Thực hiện cuộc tổng điều chỉnh Giá - Lương - Tiền lần 2 vào
                    tháng 9/1985.
                  </li>
                        <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    src="/background/hoi-nghi-8.png"
                    alt=""
                  />
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-brand-gold mb-2">
                  3. Bước đột phá thứ ba: Hội nghị Bộ Chính trị khóa V (Tháng
                  8/1986)
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  Trước thềm Đổi Mới toàn diện, Hội nghị này đã đưa ra những kết
                  luận thẳng thắn đối với một số vấn đề thuộc về quan điểm kinh
                  tế:
                  <li>
                    Về cơ cấu sản xuất:
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                      <li>
                        Thừa nhận sai lầm do chủ quan, nóng vội khi đề ra các
                        chủ trương quá lớn về quy mô và quá cao về nhịp độ xây
                        dựng cơ bản, phát triển sản xuất.
                      </li>
                      <li>
                        Hậu quả là sản xuất 5 năm "dậm chân tại chỗ", năng suất
                        lao động giảm sút. Do đó, cần tiến hành cuộc điều chỉnh
                        lớn.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Về cải tạo Xã hội chủ nghĩa: Thừa nhận đã phạm nhiều khuyết
                    điểm trong quá trình cải tạo XHCN.
                  </li>
                  <li>
                    Về cơ chế quản lý kinh tế: Yêu cầu phải phân biệt rõ chức
                    năng quản lý hành chính Nhà nước với chức năng quản lý kinh
                    tế.
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              src="/background/4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(0,0,0,0.65)]">
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/1 opacity-80"></span>
          <div className="relative space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
              PHẦN IV. Ý Nghĩa Lịch Sử Và Đánh Giá
            </h3>
            <div className="space-y-4 text-left">
              <h4 className="text-lg  text-brand mb-2">
                Những bước đột phá về kinh tế giai đoạn 1982 – 1986 (trong Đại
                hội toàn quốc lần thứ V) đã tạo ra sự chuyển biến quan trọng
                trong tư duy lãnh đạo của Đảng trên con đường đấu tranh “Tất cả
                vì Tổ quốc xã hội chủ nghĩa, vì hạnh phúc của nhân dân”. Góp
                phần khắc phục dần những khó khăn trước mắt, thúc đẩy sản xuất
                phát triển, cải thiện đời sống nhân dân. Thực tiễn giai đoạn này
                đã cung cấp những bài học quý báu, làm cơ sở để Đảng ta tiến tới
                Đại hội VI – Đại hội của sự Đổi mới toàn diện (1986). Và khẳng
                định vai trò lãnh đạo của Đảng trong việc tự đổi mới, tự chỉnh
                đốn để đáp ứng yêu cầu phát triển của đất nước trong thời kỳ
                mới.
              </h4>
            </div>
          </div>
          <img src="/background/5.jpg" alt="" />
        </div>
        <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/RfwROGftQ-s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
      </div>
    </section>
  );
};

export default News;
