// Kiến thức nền tảng cho người mới bắt đầu đầu tư chứng khoán — nội dung tĩnh, viết sẵn
// (không lấy qua RSS vì đây là kiến thức căn bản, ít thay đổi theo ngày)

// Chuyển 1 guide thành object cùng "hình dạng" với article để dùng chung ArticleCard/ArticleModal
export function guideToArticle(guide) {
  return {
    feedId: 'guide',
    guideId: guide.id,
    source: 'Kiến thức cơ bản',
    category: 'stockedu',
    title: guide.title,
    summary: guide.summary,
    html: guide.html,
    quiz: guide.quiz,
    image: null,
    isGuide: true,
    link: `guide://${guide.id}`,
    publishedAt: null,
  }
}

// Thứ tự nhóm hiển thị trong tab "Kiến thức CK" — đi từ nhập môn đến nâng cao dần
export const GUIDE_GROUPS = [
  'Nhập môn',
  'Đọc hiểu doanh nghiệp',
  'Chiến lược đầu tư',
  'Quản trị rủi ro & tâm lý',
  'Bối cảnh thị trường',
]

export const BEGINNER_GUIDES = [
  // ---------- Nhập môn ----------
  {
    id: 'guide-1',
    group: 'Nhập môn',
    title: 'Chứng khoán là gì? Cổ phiếu và trái phiếu khác nhau ra sao?',
    summary: 'Khái niệm cơ bản nhất: chứng khoán, cổ phiếu, trái phiếu là gì và vì sao doanh nghiệp phát hành chúng.',
    html: `
      <p>Chứng khoán là chứng nhận quyền sở hữu hoặc quyền đòi nợ đối với một phần vốn hoặc tài sản của tổ chức phát hành. Hai loại phổ biến nhất là <strong>cổ phiếu</strong> và <strong>trái phiếu</strong>.</p>
      <h3>Cổ phiếu</h3>
      <p>Khi mua cổ phiếu, bạn trở thành <strong>cổ đông</strong> — tức chủ sở hữu một phần nhỏ của công ty. Bạn có quyền chia lợi nhuận (cổ tức) và hưởng lợi khi giá cổ phiếu tăng, nhưng cũng chịu rủi ro mất vốn nếu công ty kinh doanh thua lỗ hoặc phá sản.</p>
      <h3>Trái phiếu</h3>
      <p>Trái phiếu giống như một khoản cho vay: bạn cho doanh nghiệp hoặc chính phủ vay tiền, đổi lại nhận lãi suất cố định theo kỳ hạn. Rủi ro thấp hơn cổ phiếu vì bạn được ưu tiên trả nợ trước cổ đông nếu công ty gặp khó khăn, nhưng lợi nhuận kỳ vọng cũng thấp hơn.</p>
      <h3>Vì sao doanh nghiệp phát hành chứng khoán?</h3>
      <ul>
        <li>Huy động vốn để mở rộng sản xuất, kinh doanh mà không cần vay ngân hàng.</li>
        <li>Cổ phiếu giúp huy động vốn dài hạn không phải hoàn trả gốc.</li>
        <li>Trái phiếu giúp huy động vốn với chi phí thường thấp hơn lãi vay ngân hàng.</li>
      </ul>
      <p>Người mới nên hiểu rõ: đầu tư cổ phiếu là chấp nhận rủi ro cao hơn để đổi lấy khả năng sinh lời cao hơn trong dài hạn — không có gì đảm bảo chắc chắn.</p>
    `,
    quiz: [
      {
        question: 'Khi mua cổ phiếu, bạn trở thành gì của công ty?',
        options: ['Chủ nợ', 'Cổ đông (chủ sở hữu một phần)', 'Nhân viên', 'Nhà cung cấp'],
        correctIndex: 1,
      },
      {
        question: 'Trái phiếu có đặc điểm gì so với cổ phiếu?',
        options: [
          'Rủi ro cao hơn, lợi nhuận kỳ vọng cao hơn',
          'Là khoản cho vay, được ưu tiên trả nợ trước cổ đông',
          'Không bao giờ được hoàn trả gốc',
          'Chỉ do chính phủ phát hành',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-2',
    group: 'Nhập môn',
    title: 'Mở tài khoản chứng khoán: cần chuẩn bị gì và bắt đầu từ đâu?',
    summary: 'Các bước cơ bản để mở tài khoản giao dịch chứng khoán lần đầu tiên tại Việt Nam.',
    html: `
      <p>Để bắt đầu đầu tư, bạn cần mở <strong>tài khoản giao dịch chứng khoán</strong> tại một công ty chứng khoán được Ủy ban Chứng khoán Nhà nước cấp phép.</p>
      <h3>Các bước cơ bản</h3>
      <ul>
        <li><strong>Chọn công ty chứng khoán:</strong> so sánh phí giao dịch, chất lượng ứng dụng, dịch vụ tư vấn.</li>
        <li><strong>Đăng ký tài khoản:</strong> hầu hết công ty hiện cho phép mở tài khoản online bằng CCCD gắn chip, xác thực qua video call trong vài phút.</li>
        <li><strong>Liên kết tài khoản ngân hàng:</strong> để nạp/rút tiền giao dịch.</li>
        <li><strong>Nộp tiền vào tài khoản:</strong> số tiền ban đầu tùy bạn, không có mức tối thiểu bắt buộc ở hầu hết công ty.</li>
        <li><strong>Đặt lệnh mua/bán:</strong> qua ứng dụng di động hoặc web, chọn mã cổ phiếu, giá và khối lượng muốn giao dịch.</li>
      </ul>
      <h3>Lưu ý cho người mới</h3>
      <p>Chỉ nên đầu tư số tiền <strong>nhàn rỗi</strong> — tiền không cần dùng đến trong ngắn hạn. Không vay tiền hoặc dùng đòn bẩy (margin) khi chưa hiểu rõ rủi ro. Nên bắt đầu với số vốn nhỏ để làm quen với cách đặt lệnh và biến động thị trường trước khi giải ngân số tiền lớn hơn.</p>
    `,
    quiz: [
      {
        question: 'Để mở tài khoản chứng khoán online hiện nay, giấy tờ phổ biến nhất cần dùng là gì?',
        options: ['Hộ khẩu giấy', 'CCCD gắn chip', 'Sổ đỏ', 'Hợp đồng lao động'],
        correctIndex: 1,
      },
      {
        question: 'Lời khuyên nào đúng cho người mới mở tài khoản chứng khoán?',
        options: [
          'Vay tiền để đầu tư ngay từ đầu',
          'Dùng toàn bộ tiền tiết kiệm khẩn cấp',
          'Chỉ đầu tư tiền nhàn rỗi và bắt đầu với số vốn nhỏ',
          'Phải có tối thiểu 100 triệu mới được mở tài khoản',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'guide-3',
    group: 'Nhập môn',
    title: 'Đọc hiểu bảng giá chứng khoán: giá trần, giá sàn, giá tham chiếu',
    summary: 'Giải mã các con số và màu sắc trên bảng giá mà nhà đầu tư mới thường bối rối.',
    html: `
      <p>Bảng giá chứng khoán ban đầu trông rối mắt, nhưng chỉ cần nắm vài khái niệm cốt lõi là có thể đọc hiểu.</p>
      <h3>Ba mức giá quan trọng</h3>
      <ul>
        <li><strong>Giá tham chiếu (màu vàng):</strong> giá đóng cửa của phiên giao dịch liền trước, dùng làm mốc tính biên độ dao động trong ngày.</li>
        <li><strong>Giá trần (màu tím):</strong> mức giá cao nhất được phép giao dịch trong phiên, thường tăng tối đa 7% (HOSE), 10% (HNX) hoặc 15% (UPCoM) so với giá tham chiếu.</li>
        <li><strong>Giá sàn (màu xanh lam/xanh dương):</strong> mức giá thấp nhất được phép giao dịch trong phiên, biên độ giảm tương ứng với sàn niêm yết.</li>
      </ul>
      <h3>Màu sắc thể hiện điều gì?</h3>
      <ul>
        <li><strong>Xanh lá:</strong> giá đang tăng so với tham chiếu.</li>
        <li><strong>Đỏ:</strong> giá đang giảm so với tham chiếu.</li>
        <li><strong>Vàng:</strong> giá đứng yên, bằng tham chiếu.</li>
      </ul>
      <h3>Khối lượng và dư mua/dư bán</h3>
      <p>Khối lượng khớp lệnh cho biết số cổ phiếu đã giao dịch thành công. Cột dư mua/dư bán thể hiện lệnh đang chờ khớp ở các mức giá khác nhau — càng nhiều lệnh chờ mua ở giá cao thường phản ánh tâm lý lạc quan của thị trường với mã đó, và ngược lại.</p>
    `,
    quiz: [
      {
        question: 'Giá tham chiếu là gì?',
        options: [
          'Giá cao nhất được phép giao dịch trong phiên',
          'Giá đóng cửa của phiên giao dịch liền trước',
          'Giá do nhà đầu tư tự đặt ra',
          'Giá thấp nhất trong ngày',
        ],
        correctIndex: 1,
      },
      {
        question: 'Màu đỏ trên bảng giá thể hiện điều gì?',
        options: ['Giá đang tăng', 'Giá đứng yên', 'Giá đang giảm so với tham chiếu', 'Cổ phiếu bị tạm ngưng giao dịch'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'guide-9',
    group: 'Nhập môn',
    title: 'Các loại lệnh giao dịch: ATO, ATC, LO, MP là gì?',
    summary: 'Phân biệt các loại lệnh phổ biến để đặt mua/bán đúng ý muốn, tránh khớp lệnh ngoài dự tính.',
    html: `
      <h3>Lệnh LO (Limit Order) — Lệnh giới hạn</h3>
      <p>Loại lệnh phổ biến nhất: bạn đặt mua hoặc bán ở một mức giá cụ thể. Lệnh chỉ khớp khi có đối ứng ở đúng giá đó hoặc tốt hơn. Đây là lựa chọn an toàn nhất cho người mới vì bạn luôn biết trước mức giá tối đa/tối thiểu mình chấp nhận.</p>
      <h3>Lệnh ATO (At The Opening) — Lệnh khớp lệnh mở cửa</h3>
      <p>Chỉ dùng trong phiên khớp lệnh định kỳ mở cửa (thường 9h00-9h15 tại HOSE). Lệnh không ghi giá, sẽ khớp theo mức giá mở cửa được xác định chung của cả thị trường, ưu tiên khớp trước các lệnh giới hạn khác.</p>
      <h3>Lệnh ATC (At The Closing) — Lệnh khớp lệnh đóng cửa</h3>
      <p>Tương tự ATO nhưng dùng trong phiên khớp lệnh định kỳ đóng cửa cuối ngày, giúp xác định giá đóng cửa chính thức của phiên.</p>
      <h3>Lệnh MP (Market Price) — Lệnh thị trường</h3>
      <p>Mua/bán ngay theo giá tốt nhất đang có trên thị trường tại thời điểm đặt lệnh, ưu tiên khớp nhanh hơn là kiểm soát giá. Rủi ro là có thể khớp ở mức giá không như kỳ vọng nếu thanh khoản thấp.</p>
      <p><strong>Gợi ý cho người mới:</strong> nên ưu tiên dùng lệnh LO trong hầu hết trường hợp để chủ động kiểm soát mức giá giao dịch, hạn chế dùng lệnh MP khi cổ phiếu có thanh khoản thấp.</p>
    `,
    quiz: [
      {
        question: 'Lệnh nào cho phép bạn đặt mua/bán ở một mức giá cụ thể do bạn tự chọn?',
        options: ['Lệnh ATO', 'Lệnh LO', 'Lệnh ATC', 'Lệnh MP'],
        correctIndex: 1,
      },
      {
        question: 'Lệnh ATC dùng để làm gì?',
        options: [
          'Khớp lệnh trong phiên mở cửa',
          'Khớp lệnh liên tục cả ngày',
          'Xác định giá đóng cửa trong phiên khớp lệnh định kỳ cuối ngày',
          'Hủy toàn bộ lệnh đang chờ',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'guide-10',
    group: 'Nhập môn',
    title: 'Sàn HOSE, HNX, UPCoM khác nhau như thế nào?',
    summary: 'Ba sàn giao dịch chứng khoán tại Việt Nam và tiêu chuẩn niêm yết của từng sàn.',
    html: `
      <h3>HOSE — Sở Giao dịch Chứng khoán TP.HCM</h3>
      <p>Sàn lớn nhất, quy tụ phần lớn doanh nghiệp vốn hóa lớn và thanh khoản cao nhất thị trường. Tiêu chuẩn niêm yết khắt khe nhất về vốn điều lệ, thời gian hoạt động có lãi và tỷ lệ cổ đông đại chúng.</p>
      <h3>HNX — Sở Giao dịch Chứng khoán Hà Nội</h3>
      <p>Quy mô nhỏ hơn HOSE, tiêu chuẩn niêm yết nhẹ hơn. Ngoài cổ phiếu, HNX còn là nơi giao dịch trái phiếu chính phủ và thị trường phái sinh (hợp đồng tương lai chỉ số VN30).</p>
      <h3>UPCoM — Thị trường công ty đại chúng chưa niêm yết</h3>
      <p>Dành cho các công ty đại chúng chưa đủ điều kiện hoặc chưa muốn niêm yết trên HOSE/HNX. Tiêu chuẩn thấp nhất, đồng nghĩa rủi ro về minh bạch thông tin và thanh khoản thường cao hơn hai sàn kia.</p>
      <h3>Vì sao người mới cần biết điều này?</h3>
      <p>Cổ phiếu trên UPCoM thường biến động mạnh hơn và thanh khoản thấp hơn — cần thận trọng và tìm hiểu kỹ doanh nghiệp trước khi giao dịch, không nên chỉ nhìn vào mức giá rẻ mà bỏ qua rủi ro thanh khoản.</p>
    `,
    quiz: [
      {
        question: 'Sàn nào có tiêu chuẩn niêm yết khắt khe nhất và thanh khoản cao nhất?',
        options: ['UPCoM', 'HOSE', 'Thị trường phái sinh', 'Cả ba sàn như nhau'],
        correctIndex: 1,
      },
      {
        question: 'Đặc điểm của cổ phiếu trên UPCoM là gì?',
        options: [
          'Tiêu chuẩn niêm yết cao nhất thị trường',
          'Rủi ro về minh bạch thông tin và thanh khoản thường cao hơn',
          'Chỉ dành riêng cho trái phiếu chính phủ',
          'Không được phép giao dịch bởi nhà đầu tư cá nhân',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-11',
    group: 'Nhập môn',
    title: 'T+2, T+3 là gì? Khi nào tiền và cổ phiếu về tài khoản',
    summary: 'Quy tắc thanh toán giao dịch chứng khoán — vì sao không thể bán ngay cổ phiếu vừa mua.',
    html: `
      <p>Khi bạn mua hoặc bán cổ phiếu, giao dịch không hoàn tất ngay lập tức mà cần thời gian để chuyển giao chứng khoán và tiền — gọi là <strong>chu kỳ thanh toán T+</strong>.</p>
      <h3>Quy tắc phổ biến tại Việt Nam</h3>
      <ul>
        <li><strong>Mua cổ phiếu:</strong> cổ phiếu về tài khoản lưu ký khoảng 13h30-14h00 ngày T+2 (2 ngày làm việc sau ngày khớp lệnh) và có thể bán ra từ thời điểm đó.</li>
        <li><strong>Bán cổ phiếu:</strong> tiền bán về tài khoản vào khoảng ngày T+2, có thể rút ra hoặc dùng để mua cổ phiếu khác.</li>
      </ul>
      <p>Ngày "T" (giao dịch) không tính thứ Bảy, Chủ nhật và ngày nghỉ lễ — nên nếu mua vào thứ Sáu, cổ phiếu thường về tài khoản vào thứ Ba tuần sau.</p>
      <h3>Ảnh hưởng thực tế đến nhà đầu tư</h3>
      <p>Vì độ trễ này, bạn cần lên kế hoạch dòng tiền trước khi đặt lệnh, tránh trường hợp muốn bán gấp một mã vừa mua trong ngày mà chưa thể thực hiện được (trừ giao dịch trong ngày T0 nếu công ty chứng khoán hỗ trợ tính năng này).</p>
    `,
    quiz: [
      {
        question: 'Sau khi mua cổ phiếu, thường mất bao lâu để cổ phiếu về tài khoản và có thể bán ra?',
        options: ['Ngay lập tức', 'Khoảng T+2', 'Khoảng T+7', 'Sau 1 tháng'],
        correctIndex: 1,
      },
      {
        question: 'Ngày "T" trong chu kỳ thanh toán có tính thứ Bảy, Chủ nhật không?',
        options: ['Có tính', 'Không tính', 'Chỉ tính thứ Bảy', 'Tùy từng công ty chứng khoán'],
        correctIndex: 1,
      },
    ],
  },

  // ---------- Đọc hiểu doanh nghiệp ----------
  {
    id: 'guide-4',
    group: 'Đọc hiểu doanh nghiệp',
    title: 'Các chỉ số tài chính cơ bản: P/E, EPS, ROE là gì?',
    summary: 'Ba chỉ số phổ biến nhất giúp đánh giá nhanh một cổ phiếu có "đắt" hay "rẻ" so với lợi nhuận công ty.',
    html: `
      <h3>EPS — Lợi nhuận trên mỗi cổ phiếu</h3>
      <p>EPS (Earnings Per Share) = Lợi nhuận sau thuế ÷ Số cổ phiếu đang lưu hành. Đây là thước đo cho biết mỗi cổ phiếu đang "gánh" bao nhiêu lợi nhuận của công ty. EPS càng cao và tăng đều qua các năm thường là dấu hiệu doanh nghiệp kinh doanh hiệu quả.</p>
      <h3>P/E — Hệ số giá trên lợi nhuận</h3>
      <p>P/E (Price to Earnings) = Giá cổ phiếu ÷ EPS. Chỉ số này cho biết nhà đầu tư đang trả bao nhiêu tiền để đổi lấy 1 đồng lợi nhuận của công ty. P/E thấp hơn trung bình ngành có thể là dấu hiệu cổ phiếu đang bị định giá thấp — nhưng cũng có thể vì công ty đang gặp vấn đề, nên không thể chỉ nhìn một mình chỉ số này để quyết định.</p>
      <h3>ROE — Tỷ suất sinh lời trên vốn chủ sở hữu</h3>
      <p>ROE (Return On Equity) = Lợi nhuận sau thuế ÷ Vốn chủ sở hữu, thể hiện hiệu quả sử dụng vốn của cổ đông. ROE trên 15% thường được xem là tốt ở thị trường Việt Nam, nhưng cần so sánh giữa các doanh nghiệp cùng ngành vì mỗi ngành có đặc thù khác nhau.</p>
      <p><strong>Lưu ý quan trọng:</strong> không có chỉ số nào nên được dùng đơn lẻ. Nhà đầu tư mới nên kết hợp nhiều chỉ số cùng lúc và tìm hiểu về ngành nghề, ban lãnh đạo, triển vọng kinh doanh trước khi ra quyết định.</p>
    `,
    quiz: [
      {
        question: 'EPS được tính bằng công thức nào?',
        options: [
          'Giá cổ phiếu ÷ Lợi nhuận sau thuế',
          'Lợi nhuận sau thuế ÷ Số cổ phiếu đang lưu hành',
          'Vốn chủ sở hữu ÷ Lợi nhuận',
          'Doanh thu ÷ Chi phí',
        ],
        correctIndex: 1,
      },
      {
        question: 'P/E thấp hơn trung bình ngành luôn có nghĩa là nên mua ngay vì cổ phiếu đang rẻ?',
        options: [
          'Đúng, luôn nên mua ngay',
          'Sai, có thể vì công ty đang gặp vấn đề, cần xem xét thêm',
          'P/E không liên quan gì đến giá cổ phiếu',
          'Chỉ áp dụng để định giá trái phiếu',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-12',
    group: 'Đọc hiểu doanh nghiệp',
    title: 'Cách đọc báo cáo tài chính cơ bản của doanh nghiệp',
    summary: 'Ba báo cáo quan trọng nhất nhà đầu tư mới cần biết cách nhìn trước khi mua bất kỳ cổ phiếu nào.',
    html: `
      <h3>Bảng cân đối kế toán</h3>
      <p>Chụp ảnh "sức khỏe tài chính" doanh nghiệp tại một thời điểm: tài sản có những gì, nợ phải trả bao nhiêu, vốn chủ sở hữu còn lại bao nhiêu. Nhà đầu tư mới nên chú ý tỷ lệ <strong>Nợ/Vốn chủ sở hữu</strong> — tỷ lệ quá cao đồng nghĩa doanh nghiệp phụ thuộc nhiều vào vay nợ, rủi ro tài chính lớn hơn.</p>
      <h3>Báo cáo kết quả kinh doanh</h3>
      <p>Cho biết doanh nghiệp kiếm và tiêu bao nhiêu tiền trong một kỳ (quý/năm): doanh thu, chi phí, lợi nhuận gộp, lợi nhuận sau thuế. Nên so sánh tốc độ tăng trưởng doanh thu và lợi nhuận qua nhiều quý/năm liên tiếp thay vì chỉ nhìn một kỳ duy nhất.</p>
      <h3>Báo cáo lưu chuyển tiền tệ</h3>
      <p>Cho biết dòng tiền thực tế ra vào doanh nghiệp từ hoạt động kinh doanh, đầu tư và tài chính. Một doanh nghiệp có lãi trên sổ sách nhưng dòng tiền kinh doanh âm liên tục là dấu hiệu cảnh báo cần thận trọng — lợi nhuận có thể chỉ nằm trên giấy chứ chưa thực sự "thu được tiền".</p>
      <p>Ba báo cáo này thường công bố theo quý và có thể tìm đọc miễn phí trên website của công ty chứng khoán hoặc trang thông tin của doanh nghiệp.</p>
    `,
    quiz: [
      {
        question: 'Báo cáo nào cho biết dòng tiền thực tế ra vào doanh nghiệp?',
        options: ['Bảng cân đối kế toán', 'Báo cáo lưu chuyển tiền tệ', 'Báo cáo thường niên', 'Bản cáo bạch'],
        correctIndex: 1,
      },
      {
        question: 'Dấu hiệu cảnh báo nào đáng chú ý khi đọc báo cáo tài chính?',
        options: [
          'Doanh thu tăng đều qua các quý',
          'Có lãi trên sổ sách nhưng dòng tiền kinh doanh âm liên tục',
          'Vốn chủ sở hữu dương',
          'Doanh nghiệp có chia cổ tức',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-13',
    group: 'Đọc hiểu doanh nghiệp',
    title: 'Vốn hóa thị trường là gì? Phân loại cổ phiếu lớn, vừa, nhỏ',
    summary: 'Hiểu quy mô doanh nghiệp qua vốn hóa để đánh giá mức độ rủi ro và biến động phù hợp.',
    html: `
      <p>Vốn hóa thị trường (market cap) = Giá cổ phiếu × Tổng số cổ phiếu đang lưu hành. Đây là thước đo quy mô của một doanh nghiệp trên thị trường chứng khoán.</p>
      <h3>Phân loại phổ biến tại Việt Nam</h3>
      <ul>
        <li><strong>Cổ phiếu vốn hóa lớn (large-cap):</strong> thường trên 10.000 tỷ đồng, là các doanh nghiệp đầu ngành, thanh khoản cao, biến động giá thường ổn định hơn.</li>
        <li><strong>Cổ phiếu vốn hóa vừa (mid-cap):</strong> khoảng 1.000-10.000 tỷ đồng, tiềm năng tăng trưởng thường cao hơn nhưng rủi ro cũng lớn hơn.</li>
        <li><strong>Cổ phiếu vốn hóa nhỏ (small-cap):</strong> dưới 1.000 tỷ đồng, biến động mạnh, thanh khoản thường thấp, dễ bị làm giá — cần đặc biệt thận trọng.</li>
      </ul>
      <h3>Gợi ý cho người mới</h3>
      <p>Nên bắt đầu tìm hiểu và đầu tư vào nhóm cổ phiếu vốn hóa lớn, đầu ngành trước để làm quen với biến động thị trường một cách an toàn hơn, trước khi mở rộng sang các mã vốn hóa vừa và nhỏ khi đã có kinh nghiệm phân tích tốt hơn.</p>
    `,
    quiz: [
      {
        question: 'Vốn hóa thị trường được tính như thế nào?',
        options: [
          'Giá cổ phiếu × Tổng số cổ phiếu đang lưu hành',
          'Doanh thu × Lợi nhuận',
          'Tổng tài sản trừ đi Nợ phải trả',
          'EPS × P/E',
        ],
        correctIndex: 0,
      },
      {
        question: 'Nhóm cổ phiếu nào thường biến động mạnh và thanh khoản thấp nhất?',
        options: ['Large-cap', 'Mid-cap', 'Small-cap', 'Cổ phiếu ngân hàng nói chung'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'guide-14',
    group: 'Đọc hiểu doanh nghiệp',
    title: 'Cổ tức là gì? Cách nhận cổ tức tiền mặt và cổ phiếu',
    summary: 'Doanh nghiệp chia lợi nhuận cho cổ đông như thế nào và cần lưu ý gì về ngày giao dịch không hưởng quyền.',
    html: `
      <p>Cổ tức (dividend) là phần lợi nhuận doanh nghiệp chia lại cho cổ đông, thường theo hai hình thức chính.</p>
      <h3>Cổ tức tiền mặt</h3>
      <p>Doanh nghiệp trả trực tiếp một số tiền cố định trên mỗi cổ phiếu (ví dụ: cổ tức 2.000 đồng/cổ phiếu). Tiền được chuyển thẳng vào tài khoản chứng khoán của cổ đông vào ngày thanh toán.</p>
      <h3>Cổ tức cổ phiếu</h3>
      <p>Doanh nghiệp phát hành thêm cổ phiếu mới chia cho cổ đông theo tỷ lệ (ví dụ: tỷ lệ 10% nghĩa là sở hữu 100 cổ phiếu được nhận thêm 10 cổ phiếu). Hình thức này không làm bạn nhận thêm giá trị ngay lập tức mà chỉ tăng số lượng cổ phiếu nắm giữ, tổng giá trị vốn hóa không đổi.</p>
      <h3>Ngày giao dịch không hưởng quyền (GDKHQ)</h3>
      <p>Đây là ngày mà nếu mua cổ phiếu, bạn <strong>sẽ không</strong> được nhận cổ tức của đợt chia sắp tới (vì việc chốt danh sách cổ đông cần thời gian xử lý). Muốn nhận cổ tức, bạn cần sở hữu cổ phiếu <em>trước</em> ngày GDKHQ này.</p>
    `,
    quiz: [
      {
        question: 'Muốn nhận cổ tức, nhà đầu tư cần sở hữu cổ phiếu vào thời điểm nào?',
        options: [
          'Sau ngày giao dịch không hưởng quyền',
          'Trước ngày giao dịch không hưởng quyền',
          'Đúng vào ngày thanh toán cổ tức',
          'Thời điểm nào cũng được, không quan trọng',
        ],
        correctIndex: 1,
      },
      {
        question: 'Cổ tức cổ phiếu có làm tăng ngay giá trị tài sản của cổ đông không?',
        options: [
          'Có, tăng gấp đôi giá trị tài sản',
          'Không, chỉ tăng số lượng cổ phiếu nắm giữ, tổng vốn hóa không đổi',
          'Luôn làm giảm giá trị tài sản',
          'Chỉ áp dụng cho trái phiếu',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-15',
    group: 'Đọc hiểu doanh nghiệp',
    title: 'Thanh khoản là gì? Vì sao thanh khoản quan trọng khi chọn cổ phiếu',
    summary: 'Vì sao một cổ phiếu "rẻ" nhưng thanh khoản thấp có thể là cái bẫy với nhà đầu tư mới.',
    html: `
      <p>Thanh khoản (liquidity) thể hiện mức độ dễ dàng mua/bán một cổ phiếu mà không làm giá biến động quá mạnh — thường đo bằng khối lượng giao dịch trung bình mỗi phiên.</p>
      <h3>Vì sao thanh khoản quan trọng?</h3>
      <ul>
        <li><strong>Dễ mua, dễ bán:</strong> cổ phiếu thanh khoản cao giúp bạn vào/ra vị thế nhanh chóng ở mức giá hợp lý, không phải "gồng" chờ có người mua đối ứng.</li>
        <li><strong>Giá phản ánh đúng cung cầu hơn:</strong> thanh khoản thấp dễ bị một vài lệnh lớn thao túng, gây biến động giá bất thường không phản ánh giá trị thực.</li>
        <li><strong>Rủi ro "kẹp hàng":</strong> với cổ phiếu thanh khoản thấp, khi muốn bán gấp có thể không tìm được người mua ở mức giá mong muốn, buộc phải bán tháo giá thấp hơn nhiều.</li>
      </ul>
      <p><strong>Gợi ý cho người mới:</strong> nên ưu tiên các cổ phiếu có khối lượng khớp lệnh trung bình hàng ngày đủ lớn (thường hàng trăm nghìn đến hàng triệu cổ phiếu/phiên) để đảm bảo linh hoạt khi cần mua bán.</p>
    `,
    quiz: [
      {
        question: 'Thanh khoản thấp mang lại rủi ro chính nào cho nhà đầu tư?',
        options: [
          'Không thể mua bán cổ phiếu đó vĩnh viễn',
          'Khó bán ra ở mức giá mong muốn khi cần gấp, dễ bị "kẹp hàng"',
          'Phải trả thuế giao dịch cao hơn',
          'Không được nhận cổ tức',
        ],
        correctIndex: 1,
      },
      {
        question: 'Thanh khoản của một cổ phiếu thường được đo bằng gì?',
        options: ['Số lượng cổ đông', 'Khối lượng giao dịch trung bình mỗi phiên', 'Vốn điều lệ', 'Giá cổ phiếu hiện tại'],
        correctIndex: 1,
      },
    ],
  },

  // ---------- Chiến lược đầu tư ----------
  {
    id: 'guide-5',
    group: 'Chiến lược đầu tư',
    title: 'Phân tích cơ bản và phân tích kỹ thuật: nên bắt đầu từ đâu?',
    summary: 'Hai trường phái phân tích chính khi chọn cổ phiếu — điểm khác biệt và cách kết hợp.',
    html: `
      <h3>Phân tích cơ bản (Fundamental Analysis)</h3>
      <p>Tập trung trả lời câu hỏi: <em>"Doanh nghiệp này có tốt không, cổ phiếu đang rẻ hay đắt?"</em>. Nhà đầu tư xem xét báo cáo tài chính, mô hình kinh doanh, ban lãnh đạo, vị thế cạnh tranh và triển vọng ngành để ước tính giá trị thực của doanh nghiệp, từ đó so sánh với giá thị trường.</p>
      <h3>Phân tích kỹ thuật (Technical Analysis)</h3>
      <p>Tập trung trả lời câu hỏi: <em>"Thời điểm nào nên mua hoặc bán?"</em>. Nhà đầu tư dùng biểu đồ giá, khối lượng giao dịch và các chỉ báo (đường MA, RSI, MACD...) để nhận diện xu hướng và điểm vào/ra lệnh, dựa trên giả định lịch sử giá có xu hướng lặp lại theo tâm lý đám đông.</p>
      <h3>Người mới nên bắt đầu từ đâu?</h3>
      <p>Nên học phân tích cơ bản trước để hiểu rõ mình đang sở hữu doanh nghiệp gì, tránh mua theo tin đồn. Phân tích kỹ thuật có thể học sau, dùng để hỗ trợ chọn thời điểm giải ngân hợp lý hơn — không nên dùng riêng lẻ một trường phái mà bỏ qua trường phái còn lại.</p>
    `,
    quiz: [
      {
        question: 'Phân tích cơ bản giúp trả lời câu hỏi nào?',
        options: [
          'Thời điểm nào nên mua hoặc bán',
          'Doanh nghiệp này có tốt không, giá đang rẻ hay đắt',
          'Xu hướng giá ngắn hạn ra sao',
          'Khối lượng giao dịch hôm nay là bao nhiêu',
        ],
        correctIndex: 1,
      },
      {
        question: 'Phân tích kỹ thuật chủ yếu dựa vào công cụ nào?',
        options: [
          'Báo cáo tài chính doanh nghiệp',
          'Biểu đồ giá, khối lượng giao dịch và các chỉ báo',
          'Tin tức vĩ mô',
          'Thông tin về ban lãnh đạo doanh nghiệp',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-8',
    group: 'Chiến lược đầu tư',
    title: 'Đầu tư dài hạn hay lướt sóng? Chọn phong cách phù hợp khi mới bắt đầu',
    summary: 'So sánh hai phong cách đầu tư phổ biến để chọn hướng đi phù hợp với người mới.',
    html: `
      <h3>Đầu tư dài hạn (buy and hold)</h3>
      <p>Chọn doanh nghiệp tốt, mua và nắm giữ trong nhiều năm, ít quan tâm đến biến động ngắn hạn. Phong cách này đòi hỏi kiên nhẫn nhưng ít tốn thời gian theo dõi bảng điện hàng ngày, phù hợp với người đi làm bận rộn và người mới chưa quen với biến động giá.</p>
      <h3>Lướt sóng ngắn hạn (trading)</h3>
      <p>Mua bán trong thời gian ngắn (vài ngày đến vài tuần) để tìm kiếm lợi nhuận từ biến động giá. Đòi hỏi kiến thức phân tích kỹ thuật vững, kỷ luật cắt lỗ nghiêm ngặt, và nhiều thời gian theo dõi thị trường liên tục — rủi ro và áp lực tâm lý cao hơn nhiều so với đầu tư dài hạn.</p>
      <h3>Gợi ý cho người mới</h3>
      <p>Nên bắt đầu với phong cách <strong>đầu tư dài hạn vào các doanh nghiệp cơ bản tốt</strong> để làm quen với thị trường, tích lũy kinh nghiệm và kiểm soát cảm xúc trước. Khi đã hiểu rõ bản thân và thị trường hơn, có thể cân nhắc phân bổ một phần vốn nhỏ để thử nghiệm phong cách lướt sóng nếu thực sự quan tâm — nhưng không nên bắt đầu hành trình đầu tư bằng lướt sóng.</p>
    `,
    quiz: [
      {
        question: 'Phong cách đầu tư nào được khuyến nghị cho người mới bắt đầu?',
        options: [
          'Lướt sóng ngắn hạn ngay từ đầu',
          'Đầu tư dài hạn vào doanh nghiệp cơ bản tốt',
          'Chỉ nên dùng margin để tăng lợi nhuận',
          'Mua theo tin đồn trên mạng xã hội',
        ],
        correctIndex: 1,
      },
      {
        question: 'Lướt sóng ngắn hạn đòi hỏi điều gì nhiều hơn so với đầu tư dài hạn?',
        options: [
          'Ít thời gian theo dõi thị trường hơn',
          'Kiến thức phân tích kỹ thuật vững và kỷ luật cắt lỗ nghiêm ngặt',
          'Không cần quan tâm đến biến động giá',
          'Không cần kiến thức gì đặc biệt',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-16',
    group: 'Chiến lược đầu tư',
    title: 'Đầu tư giá trị là gì? Bài học từ Warren Buffett',
    summary: 'Triết lý mua doanh nghiệp tốt ở mức giá hợp lý — trường phái đầu tư nổi tiếng nhất thế giới.',
    html: `
      <p>Đầu tư giá trị (value investing) là triết lý tìm mua cổ phiếu đang được thị trường định giá <strong>thấp hơn giá trị thực</strong> của doanh nghiệp, rồi kiên nhẫn nắm giữ đến khi thị trường nhận ra giá trị đó.</p>
      <h3>Nguyên tắc cốt lõi</h3>
      <ul>
        <li><strong>Biên an toàn (margin of safety):</strong> chỉ mua khi giá thấp hơn đáng kể so với giá trị ước tính, tạo khoảng đệm cho những sai sót trong phân tích.</li>
        <li><strong>Hiểu rõ doanh nghiệp mình sở hữu:</strong> Warren Buffett nổi tiếng với nguyên tắc chỉ đầu tư vào những ngành nghề, mô hình kinh doanh mình thực sự hiểu rõ.</li>
        <li><strong>Kiên nhẫn dài hạn:</strong> đầu tư giá trị thường đòi hỏi thời gian nhiều năm để thị trường "định giá lại" đúng doanh nghiệp, không phù hợp với người muốn có lời nhanh.</li>
      </ul>
      <h3>Áp dụng thực tế cho người mới</h3>
      <p>Không cần phải là chuyên gia tài chính mới áp dụng được — chỉ cần tập thói quen đọc báo cáo tài chính cơ bản, so sánh P/E, ROE với trung bình ngành, và tránh mua cổ phiếu chỉ vì "nghe nói sắp tăng" mà không hiểu doanh nghiệp làm gì.</p>
    `,
    quiz: [
      {
        question: '"Biên an toàn" (margin of safety) trong đầu tư giá trị nghĩa là gì?',
        options: [
          'Vay margin để tăng lợi nhuận',
          'Chỉ mua khi giá thấp hơn đáng kể so với giá trị ước tính',
          'Luôn giữ 100% tiền mặt, không đầu tư',
          'Bán ngay khi vừa có lãi nhỏ',
        ],
        correctIndex: 1,
      },
      {
        question: 'Nguyên tắc nổi tiếng của Warren Buffett được nhắc đến trong bài là gì?',
        options: [
          'Đầu tư vào mọi ngành để đa dạng tối đa',
          'Chỉ đầu tư vào ngành nghề mình thực sự hiểu rõ',
          'Luôn dùng đòn bẩy tối đa',
          'Mua bán liên tục trong ngày',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-17',
    group: 'Chiến lược đầu tư',
    title: 'DCA là gì? Đầu tư định kỳ đều đặn dành cho người bận rộn',
    summary: 'Chiến lược mua đều đặn theo thời gian, giảm áp lực phải "canh đúng đáy" để mua.',
    html: `
      <p>DCA (Dollar Cost Averaging — trung bình giá theo thời gian) là chiến lược đầu tư một số tiền cố định vào cùng một cổ phiếu hoặc quỹ theo định kỳ đều đặn (hàng tháng, hàng quý), bất kể giá tại thời điểm đó cao hay thấp.</p>
      <h3>Vì sao chiến lược này hiệu quả với người mới?</h3>
      <ul>
        <li><strong>Không cần "đoán đáy":</strong> loại bỏ áp lực phải tìm đúng thời điểm vàng để mua — điều mà ngay cả chuyên gia cũng khó làm được liên tục.</li>
        <li><strong>Trung bình hóa giá vốn:</strong> khi giá giảm, cùng số tiền mua được nhiều cổ phiếu hơn; khi giá tăng, mua được ít hơn — giúp giá vốn trung bình hợp lý hơn theo thời gian.</li>
        <li><strong>Xây dựng kỷ luật đầu tư:</strong> biến việc đầu tư thành thói quen định kỳ giống như tiết kiệm, giảm ảnh hưởng của cảm xúc thị trường lên quyết định.</li>
      </ul>
      <p>Chiến lược DCA phù hợp nhất khi áp dụng cho các cổ phiếu nền tảng tốt hoặc quỹ ETF theo chỉ số, đầu tư trong khung thời gian dài hạn (nhiều năm) thay vì kỳ vọng lợi nhuận nhanh.</p>
    `,
    quiz: [
      {
        question: 'DCA (trung bình giá theo thời gian) là chiến lược gì?',
        options: [
          'Mua toàn bộ vốn một lần duy nhất khi giá đẹp nhất',
          'Đầu tư số tiền cố định đều đặn theo thời gian, bất kể giá cao hay thấp',
          'Chỉ mua khi giá đã giảm sâu',
          'Vay tiền để mua thêm cổ phiếu',
        ],
        correctIndex: 1,
      },
      {
        question: 'Lợi ích chính của chiến lược DCA là gì?',
        options: [
          'Đảm bảo luôn có lãi',
          'Loại bỏ áp lực phải "đoán đáy" và trung bình hóa giá vốn theo thời gian',
          'Tăng rủi ro tập trung vào một thời điểm',
          'Chỉ phù hợp với phong cách lướt sóng',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-18',
    group: 'Chiến lược đầu tư',
    title: 'Quỹ mở và ETF: lựa chọn nhẹ nhàng hơn cho người mới',
    summary: 'Không có thời gian nghiên cứu từng cổ phiếu? Đây là lựa chọn đầu tư gián tiếp qua quỹ.',
    html: `
      <h3>Quỹ mở (mutual fund)</h3>
      <p>Nhà đầu tư góp tiền vào quỹ do công ty quản lý quỹ chuyên nghiệp vận hành, đội ngũ chuyên gia sẽ thay bạn chọn cổ phiếu, trái phiếu để đầu tư theo chiến lược của quỹ. Đổi lại, bạn trả một khoản phí quản lý hàng năm.</p>
      <h3>ETF (Exchange Traded Fund)</h3>
      <p>Quỹ hoán đổi danh mục, mô phỏng theo một chỉ số nhất định (ví dụ ETF theo VN30 sẽ nắm giữ rổ 30 cổ phiếu vốn hóa lớn nhất). ETF được giao dịch trên sàn chứng khoán như một cổ phiếu thông thường, phí quản lý thường thấp hơn quỹ mở chủ động.</p>
      <h3>Vì sao phù hợp với người mới?</h3>
      <ul>
        <li>Không cần tự phân tích từng doanh nghiệp riêng lẻ, giảm thời gian và áp lực nghiên cứu.</li>
        <li>Tự động đa dạng hóa danh mục do quỹ nắm giữ nhiều mã cùng lúc, giảm rủi ro tập trung vào 1-2 cổ phiếu.</li>
        <li>Phù hợp làm bước đệm để làm quen với thị trường trước khi tự chọn cổ phiếu riêng lẻ.</li>
      </ul>
    `,
    quiz: [
      {
        question: 'ETF thường mô phỏng theo điều gì?',
        options: ['Một cổ phiếu duy nhất', 'Một chỉ số nhất định, ví dụ VN30', 'Giá vàng thế giới', 'Lãi suất ngân hàng'],
        correctIndex: 1,
      },
      {
        question: 'Ưu điểm chính của đầu tư qua quỹ mở/ETF với người mới là gì?',
        options: [
          'Phải tự phân tích từng cổ phiếu riêng lẻ',
          'Tự động đa dạng hóa danh mục, giảm rủi ro tập trung',
          'Không mất bất kỳ khoản phí nào',
          'Chỉ giao dịch được một lần duy nhất mỗi năm',
        ],
        correctIndex: 1,
      },
    ],
  },

  // ---------- Quản trị rủi ro & tâm lý ----------
  {
    id: 'guide-6',
    group: 'Quản trị rủi ro & tâm lý',
    title: 'Quản trị vốn và rủi ro: nguyên tắc sống còn khi mới đầu tư',
    summary: 'Quy tắc quản lý tiền quan trọng hơn cả việc chọn đúng cổ phiếu.',
    html: `
      <p>Nhiều nhà đầu tư mới thua lỗ không phải vì chọn sai cổ phiếu, mà vì <strong>quản trị vốn kém</strong>. Dưới đây là các nguyên tắc nền tảng.</p>
      <ul>
        <li><strong>Không "all-in":</strong> đừng bao giờ dồn toàn bộ vốn vào một mã cổ phiếu duy nhất, dù bạn tự tin đến đâu.</li>
        <li><strong>Đa dạng hóa danh mục:</strong> phân bổ vốn vào nhiều ngành, nhiều mã khác nhau để giảm rủi ro khi một ngành gặp khó khăn.</li>
        <li><strong>Xác định mức lỗ chấp nhận được (cắt lỗ):</strong> đặt trước ngưỡng lỗ tối đa cho mỗi khoản đầu tư (ví dụ 7-10%) và tuân thủ kỷ luật, tránh để cảm xúc chi phối.</li>
        <li><strong>Không dùng đòn bẩy khi mới bắt đầu:</strong> vay margin khuếch đại cả lãi lẫn lỗ — rất rủi ro với người chưa có kinh nghiệm.</li>
        <li><strong>Chỉ đầu tư tiền nhàn rỗi:</strong> không dùng tiền sinh hoạt, tiền dự phòng khẩn cấp hay tiền vay để đầu tư chứng khoán.</li>
      </ul>
      <p>Mục tiêu của quản trị rủi ro không phải là tránh mọi khoản lỗ (điều không thể trên thị trường chứng khoán), mà là đảm bảo một vài quyết định sai lầm không đánh sập toàn bộ tài khoản của bạn.</p>
    `,
    quiz: [
      {
        question: 'Nguyên tắc "không all-in" nghĩa là gì?',
        options: [
          'Dồn hết vốn vào 1 mã cổ phiếu tiềm năng nhất',
          'Không dồn toàn bộ vốn vào một mã cổ phiếu duy nhất',
          'Không bao giờ được đầu tư',
          'Chỉ được đầu tư vào trái phiếu',
        ],
        correctIndex: 1,
      },
      {
        question: 'Mục tiêu thực sự của quản trị rủi ro là gì?',
        options: [
          'Tránh tuyệt đối mọi khoản lỗ',
          'Đảm bảo một vài quyết định sai không đánh sập toàn bộ tài khoản',
          'Luôn dùng đòn bẩy tối đa để tăng lợi nhuận',
          'Chỉ đầu tư vào đúng 1 mã cổ phiếu',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-7',
    group: 'Quản trị rủi ro & tâm lý',
    title: '5 sai lầm phổ biến của nhà đầu tư F0',
    summary: 'Những lỗi thường gặp nhất khiến người mới đầu tư dễ mất tiền oan.',
    html: `
      <ol>
        <li><strong>Mua theo tin đồn, hô hào trên mạng xã hội:</strong> không tự tìm hiểu doanh nghiệp trước khi xuống tiền, dễ trở thành người "cầm hàng" cuối cùng khi giá đảo chiều.</li>
        <li><strong>FOMO (sợ bỏ lỡ):</strong> lao vào mua khi giá đã tăng nóng vì sợ "lỡ sóng", thường mua đúng đỉnh.</li>
        <li><strong>Lướt sóng quá đà:</strong> mua bán liên tục trong thời gian ngắn khiến chi phí giao dịch (phí, thuế) bào mòn lợi nhuận, đồng thời dễ ra quyết định theo cảm xúc.</li>
        <li><strong>Không cắt lỗ đúng lúc:</strong> giữ cổ phiếu thua lỗ với hy vọng "về bờ", đến khi khoản lỗ quá lớn mới bán tháo trong hoảng loạn.</li>
        <li><strong>Không đa dạng hóa:</strong> dồn hết vốn vào 1-2 mã vì quá tự tin, chịu rủi ro tập trung rất cao khi công ty đó gặp biến cố riêng.</li>
      </ol>
      <p>Phần lớn các sai lầm này đến từ việc để <strong>cảm xúc</strong> (sợ hãi, tham lam, FOMO) chi phối quyết định thay vì có một kế hoạch đầu tư rõ ràng và kỷ luật tuân thủ nó.</p>
    `,
    quiz: [
      {
        question: 'FOMO trong đầu tư nghĩa là gì?',
        options: [
          'Phân tích kỹ doanh nghiệp trước khi mua',
          'Sợ bỏ lỡ, mua đuổi khi giá đã tăng nóng',
          'Một loại lệnh giao dịch',
          'Một chỉ số tài chính',
        ],
        correctIndex: 1,
      },
      {
        question: 'Sai lầm phổ biến nào liên quan đến việc giữ cổ phiếu đang thua lỗ?',
        options: [
          'Cắt lỗ quá sớm khi vừa lỗ nhẹ',
          'Không cắt lỗ đúng lúc, giữ hy vọng "về bờ" đến khi lỗ nặng',
          'Bán ngay khi vừa có lãi nhỏ',
          'Đa dạng hóa danh mục quá mức',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-19',
    group: 'Quản trị rủi ro & tâm lý',
    title: 'Margin (ký quỹ) là gì? Vì sao người mới nên tránh xa đòn bẩy',
    summary: 'Vay tiền công ty chứng khoán để mua thêm cổ phiếu — công cụ khuếch đại cả lợi nhuận lẫn thua lỗ.',
    html: `
      <p>Margin (giao dịch ký quỹ) là hình thức vay tiền từ công ty chứng khoán để mua thêm cổ phiếu, dùng chính cổ phiếu đang nắm giữ làm tài sản đảm bảo.</p>
      <h3>Cách hoạt động</h3>
      <p>Ví dụ tỷ lệ margin 1:1, bạn có 100 triệu đồng vốn tự có có thể vay thêm 100 triệu để mua tổng cộng 200 triệu đồng cổ phiếu. Nếu giá tăng 10%, lợi nhuận trên vốn tự có của bạn tăng gần gấp đôi. Nhưng nếu giá giảm 10%, khoản lỗ cũng bị khuếch đại tương ứng.</p>
      <h3>Rủi ro "call margin"</h3>
      <p>Khi giá trị tài sản đảm bảo giảm xuống dưới một ngưỡng nhất định, công ty chứng khoán sẽ yêu cầu bạn nộp thêm tiền (call margin) hoặc <strong>tự động bán giải chấp</strong> cổ phiếu của bạn để thu hồi nợ — thường vào đúng lúc giá đang giảm mạnh, khiến khoản lỗ càng nặng nề hơn.</p>
      <p><strong>Lời khuyên:</strong> nhà đầu tư mới nên giao dịch hoàn toàn bằng vốn tự có trong ít nhất 1-2 năm đầu để hiểu rõ khẩu vị rủi ro của bản thân, trước khi cân nhắc dùng margin ở mức thận trọng.</p>
    `,
    quiz: [
      {
        question: 'Margin (giao dịch ký quỹ) là gì?',
        options: [
          'Một loại thuế giao dịch chứng khoán',
          'Vay tiền công ty chứng khoán để mua thêm cổ phiếu',
          'Phí quản lý quỹ đầu tư',
          'Cổ tức trả bằng cổ phiếu',
        ],
        correctIndex: 1,
      },
      {
        question: '"Call margin" xảy ra khi nào?',
        options: [
          'Khi giá trị tài sản đảm bảo giảm xuống dưới ngưỡng quy định',
          'Khi nhà đầu tư muốn rút lãi ra',
          'Khi công ty chứng khoán tăng phí giao dịch',
          'Khi thị trường tạm nghỉ giao dịch',
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: 'guide-20',
    group: 'Quản trị rủi ro & tâm lý',
    title: 'Tâm lý đầu tư: kiểm soát cảm xúc để không tự phá vỡ kế hoạch',
    summary: 'Yếu tố quyết định thành bại của nhà đầu tư thường là tâm lý chứ không phải kiến thức.',
    html: `
      <p>Rất nhiều nhà đầu tư có đủ kiến thức phân tích nhưng vẫn thua lỗ vì không kiểm soát được cảm xúc khi thị trường biến động.</p>
      <h3>Hai cảm xúc chi phối lớn nhất: sợ hãi và tham lam</h3>
      <ul>
        <li><strong>Tham lam</strong> khiến nhà đầu tư mua đuổi khi giá đã tăng nóng, hoặc giữ cổ phiếu quá lâu vì kỳ vọng lãi thêm mà bỏ lỡ điểm chốt lời hợp lý.</li>
        <li><strong>Sợ hãi</strong> khiến nhà đầu tư bán tháo trong hoảng loạn khi thị trường điều chỉnh, dù doanh nghiệp cơ bản không thay đổi, rồi mua lại ở giá cao hơn khi thị trường hồi phục.</li>
      </ul>
      <h3>Cách xây dựng kỷ luật đầu tư</h3>
      <ul>
        <li>Viết ra kế hoạch đầu tư cụ thể (mục tiêu, mức cắt lỗ, mức chốt lời) <em>trước khi</em> mua, và tuân thủ nó thay vì quyết định tùy hứng theo cảm xúc lúc thị trường biến động.</li>
        <li>Hạn chế xem bảng giá liên tục trong ngày nếu đang đầu tư dài hạn — theo dõi quá sát dễ khiến bạn phản ứng thái quá với biến động ngắn hạn không quan trọng.</li>
        <li>Chấp nhận rằng thua lỗ là một phần bình thường của đầu tư — quan trọng là tổng thể chiến lược có lợi nhuận dương trong dài hạn.</li>
      </ul>
    `,
    quiz: [
      {
        question: 'Hai cảm xúc chi phối lớn nhất đến quyết định của nhà đầu tư là gì?',
        options: ['Vui vẻ và buồn bã', 'Sợ hãi và tham lam', 'Hào hứng và chán nản', 'Tự tin và do dự'],
        correctIndex: 1,
      },
      {
        question: 'Cách xây dựng kỷ luật đầu tư tốt là gì?',
        options: [
          'Quyết định tùy hứng theo cảm xúc lúc thị trường biến động',
          'Viết kế hoạch đầu tư cụ thể trước khi mua và tuân thủ nó',
          'Xem bảng giá liên tục suốt cả ngày',
          'Không bao giờ chấp nhận một khoản thua lỗ nào',
        ],
        correctIndex: 1,
      },
    ],
  },

  // ---------- Bối cảnh thị trường ----------
  {
    id: 'guide-21',
    group: 'Bối cảnh thị trường',
    title: 'VN-Index, VN30 là gì? Ý nghĩa của các chỉ số thị trường',
    summary: 'Các chỉ số bạn thường nghe trên tin tức mỗi ngày thực chất đo lường điều gì.',
    html: `
      <h3>VN-Index</h3>
      <p>Chỉ số đại diện cho biến động giá của toàn bộ cổ phiếu niêm yết trên sàn HOSE, tính theo phương pháp bình quân gia quyền theo vốn hóa — nghĩa là các doanh nghiệp vốn hóa càng lớn càng ảnh hưởng nhiều đến chỉ số. VN-Index tăng/giảm phản ánh xu hướng chung của thị trường, nhưng không có nghĩa mọi cổ phiếu đều biến động cùng chiều.</p>
      <h3>VN30</h3>
      <p>Chỉ số tính riêng cho rổ 30 cổ phiếu vốn hóa lớn nhất và thanh khoản tốt nhất trên HOSE, được chọn lọc và cập nhật định kỳ. VN30 thường dùng làm tài sản cơ sở cho hợp đồng tương lai phái sinh.</p>
      <h3>HNX-Index, UPCoM-Index</h3>
      <p>Tương tự VN-Index nhưng đo lường biến động của cổ phiếu niêm yết trên sàn HNX và UPCoM tương ứng.</p>
      <p><strong>Lưu ý cho người mới:</strong> chỉ số thị trường tăng không đảm bảo cổ phiếu bạn nắm giữ cũng tăng, và ngược lại — nên luôn đánh giá từng doanh nghiệp cụ thể thay vì chỉ nhìn diễn biến chung của chỉ số.</p>
    `,
    quiz: [
      {
        question: 'VN-Index đo lường điều gì?',
        options: [
          'Chỉ riêng 30 cổ phiếu vốn hóa lớn nhất',
          'Biến động giá của toàn bộ cổ phiếu niêm yết trên HOSE',
          'Lãi suất điều hành của ngân hàng trung ương',
          'Tỷ giá USD/VND',
        ],
        correctIndex: 1,
      },
      {
        question: 'VN-Index tăng có đảm bảo mọi cổ phiếu bạn đang nắm giữ cũng tăng theo không?',
        options: [
          'Có, luôn luôn tăng theo',
          'Không, cần đánh giá từng doanh nghiệp cụ thể',
          'Chỉ đúng với cổ phiếu ngân hàng',
          'Chỉ đúng vào phiên giao dịch thứ Hai',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-22',
    group: 'Bối cảnh thị trường',
    title: 'Lạm phát và lãi suất ảnh hưởng đến chứng khoán như thế nào?',
    summary: 'Hai yếu tố vĩ mô thường được nhắc đến nhiều nhất khi bàn về xu hướng thị trường.',
    html: `
      <h3>Lãi suất</h3>
      <p>Khi ngân hàng trung ương tăng lãi suất, chi phí vay vốn của doanh nghiệp tăng theo, ảnh hưởng đến lợi nhuận; đồng thời tiền gửi tiết kiệm trở nên hấp dẫn hơn so với đầu tư cổ phiếu, khiến dòng tiền có xu hướng rút khỏi thị trường chứng khoán. Ngược lại, lãi suất giảm thường hỗ trợ tích cực cho giá cổ phiếu.</p>
      <h3>Lạm phát</h3>
      <p>Lạm phát cao làm tăng chi phí đầu vào của doanh nghiệp (nguyên vật liệu, nhân công), có thể bào mòn biên lợi nhuận nếu doanh nghiệp không chuyển được chi phí này sang giá bán. Lạm phát cao cũng thường buộc ngân hàng trung ương phải tăng lãi suất để kiềm chế, gián tiếp gây áp lực lên thị trường chứng khoán.</p>
      <h3>Ý nghĩa thực tế cho nhà đầu tư mới</h3>
      <p>Không cần phải là chuyên gia kinh tế vĩ mô, nhưng nên có thói quen theo dõi tin tức về lãi suất điều hành và chỉ số giá tiêu dùng (CPI) hàng tháng, vì đây là hai yếu tố có thể ảnh hưởng đến xu hướng chung của toàn thị trường, không riêng một cổ phiếu nào.</p>
    `,
    quiz: [
      {
        question: 'Khi lãi suất tăng, thị trường chứng khoán thường bị ảnh hưởng như thế nào?',
        options: [
          'Luôn luôn tăng mạnh hơn',
          'Dòng tiền có xu hướng rút khỏi cổ phiếu vì gửi tiết kiệm hấp dẫn hơn',
          'Không có ảnh hưởng gì cả',
          'Chỉ ảnh hưởng đến thị trường trái phiếu',
        ],
        correctIndex: 1,
      },
      {
        question: 'Lạm phát cao ảnh hưởng đến doanh nghiệp như thế nào?',
        options: [
          'Luôn làm tăng lợi nhuận doanh nghiệp',
          'Có thể làm tăng chi phí đầu vào, bào mòn biên lợi nhuận',
          'Không liên quan gì đến hoạt động doanh nghiệp',
          'Chỉ ảnh hưởng đến ngân hàng trung ương',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-23',
    group: 'Bối cảnh thị trường',
    title: 'Thuế và phí khi giao dịch chứng khoán tại Việt Nam',
    summary: 'Các khoản chi phí thực tế cần tính đến khi ước tính lợi nhuận đầu tư.',
    html: `
      <h3>Phí giao dịch</h3>
      <p>Công ty chứng khoán thu phí trên mỗi giao dịch mua hoặc bán, thường dao động khoảng 0,1%-0,35% giá trị giao dịch tùy công ty và gói dịch vụ. Phí này áp dụng cho cả lệnh mua lẫn lệnh bán.</p>
      <h3>Thuế thu nhập cá nhân</h3>
      <p>Khi bán cổ phiếu, nhà đầu tư cá nhân chịu thuế thu nhập cá nhân 0,1% trên giá trị bán (không phụ thuộc lãi hay lỗ) — khoản thuế này thường được công ty chứng khoán khấu trừ tự động.</p>
      <h3>Thuế cổ tức</h3>
      <p>Cổ tức tiền mặt nhận được cũng chịu thuế thu nhập cá nhân 5%, thường bị khấu trừ ngay khi chi trả.</p>
      <h3>Vì sao cần quan tâm?</h3>
      <p>Với nhà đầu tư lướt sóng giao dịch thường xuyên, tổng phí và thuế cộng dồn có thể bào mòn đáng kể lợi nhuận — đây cũng là một lý do khiến giao dịch quá thường xuyên thường bất lợi hơn so với vẻ ngoài của nó.</p>
    `,
    quiz: [
      {
        question: 'Thuế thu nhập cá nhân khi bán cổ phiếu tại Việt Nam được tính như thế nào?',
        options: [
          '0,1% trên giá trị bán, không phụ thuộc lãi hay lỗ',
          '20% trên phần lợi nhuận thu được',
          'Miễn thuế hoàn toàn cho nhà đầu tư cá nhân',
          'Chỉ áp dụng khi giao dịch bị lỗ',
        ],
        correctIndex: 0,
      },
      {
        question: 'Giao dịch lướt sóng thường xuyên ảnh hưởng gì đến lợi nhuận thực nhận?',
        options: [
          'Không ảnh hưởng gì đến lợi nhuận',
          'Phí và thuế cộng dồn có thể bào mòn đáng kể lợi nhuận',
          'Luôn giúp tăng lợi nhuận',
          'Được miễn toàn bộ phí giao dịch',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'guide-24',
    group: 'Bối cảnh thị trường',
    title: 'Cách chọn công ty chứng khoán phù hợp với người mới',
    summary: 'Tiêu chí nên cân nhắc trước khi quyết định mở tài khoản ở đâu.',
    html: `
      <ul>
        <li><strong>Biểu phí giao dịch:</strong> so sánh mức phí mua/bán giữa các công ty — chênh lệch nhỏ mỗi giao dịch nhưng cộng dồn lâu dài có thể đáng kể.</li>
        <li><strong>Chất lượng ứng dụng giao dịch:</strong> giao diện dễ dùng, ổn định, ít lỗi khi thị trường biến động mạnh — thời điểm quan trọng nhất để đặt lệnh kịp thời.</li>
        <li><strong>Lãi suất margin (nếu có nhu cầu dùng sau này):</strong> các công ty có mức lãi suất cho vay ký quỹ khác nhau đáng kể.</li>
        <li><strong>Chất lượng tư vấn và báo cáo phân tích:</strong> một số công ty chứng khoán cung cấp báo cáo phân tích doanh nghiệp, ngành miễn phí cho khách hàng — nguồn tham khảo hữu ích cho người mới.</li>
        <li><strong>Độ uy tín và quy mô:</strong> ưu tiên các công ty chứng khoán có lịch sử hoạt động lâu năm, được cấp phép đầy đủ bởi Ủy ban Chứng khoán Nhà nước.</li>
      </ul>
      <p>Người mới không nhất thiết phải chọn công ty phí thấp nhất — đôi khi trải nghiệm ứng dụng ổn định và hỗ trợ tốt quan trọng hơn, đặc biệt trong giai đoạn đầu làm quen với thị trường.</p>
    `,
    quiz: [
      {
        question: 'Điều nào KHÔNG nên là tiêu chí duy nhất khi chọn công ty chứng khoán?',
        options: [
          'Chỉ chọn công ty phí thấp nhất mà bỏ qua mọi yếu tố khác',
          'Chất lượng ứng dụng giao dịch ổn định',
          'Độ uy tín và giấy phép hoạt động hợp lệ',
          'Chất lượng tư vấn và báo cáo phân tích',
        ],
        correctIndex: 0,
      },
      {
        question: 'Vì sao chất lượng ứng dụng giao dịch lại quan trọng?',
        options: [
          'Không quan trọng, chỉ cần giao diện đẹp',
          'Cần ổn định, ít lỗi để đặt lệnh kịp thời khi thị trường biến động mạnh',
          'Chỉ cần đẹp mắt là đủ',
          'Không liên quan gì đến trải nghiệm đầu tư',
        ],
        correctIndex: 1,
      },
    ],
  },
]
