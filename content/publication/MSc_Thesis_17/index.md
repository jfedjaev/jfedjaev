---
title: "Decoding EEG Brain Signals using Recurrent Neural Networks"
authors:
- Juri Fedjaev

date: "2017-12-12T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-02-02T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["7"]

# Publication name and optional abbreviated publication name.
publication: "Chair for Neuroscientific System Theory, TU Munich"
publication_short: "NST"

abstract: "Brain-computer interfaces (BCIs) based on electroencephalography (EEG) enable direct communication between humans and computers by analyzing brain activity. Specifically, modern BCIs are capable of translating imagined movements into real- life control signals, e.g., to actuate a robotic arm or prosthesis. This type of BCI is already used in rehabilitation robotics and provides an alternative communication channel for patients suffering from amyotrophic lateral sclerosis or severe spinal cord injury. Current state-of-the-art methods are based on traditional machine learning, which involves the identification of discriminative features. This is a challenging task due to the non-linear, non-stationary and time-varying characteristics of EEG signals, which led to stagnating progress in classification performance. Deep learning alleviates the efforts for manual feature engineering through end-to-end decoding, which potentially presents a promising solution for EEG signal classification.
This thesis investigates how deep learning models such as long short-term memory (LSTM) and convolutional neural networks (CNN) perform on the task of decoding motor imagery movements from EEG signals. For this task, both a LSTM and a CNN model are developed using the latest advances in deep learning, such as batch normalization, dropout and cropped training strategies for data augmentation. Evaluation is performed on a novel EEG dataset consisting of 20 healthy subjects. The LSTM model reaches the state-of-the-art performance of support vector ma- chines with a cross-validated accuracy of 66.20%. The CNN model that employs a time-frequency transformation in its first layer outperforms the LSTM model and reaches a mean accuracy of 84.23%. This shows that deep learning approaches de- liver competitive performance without the need for hand-crafted features, enabling end-to-end classification."

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Brain-Computer Interfaces
- Spectrogram-based convolutional neural network model (pCNN)
- Deep Learning; electroencephalography (EEG)
- Long short-term memory (LSTM)
- Recurrent convolutional neural network (RCNN)
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://mediatum.ub.tum.de/doc/1422453/file.pdf
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example

---

