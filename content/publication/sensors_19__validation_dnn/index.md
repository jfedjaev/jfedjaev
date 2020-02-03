---
title: "Validating Deep Neural Networks for Online Decoding of Motor Imagery Movements from EEG Signals"
authors:
- Zied Tayeb
- Juri Fedjaev
- Nejla Ghaboosi
- Christoph Richter
- Lukas Everding
- Xingwei Qu
- Yingyu Wu
- Gordon Cheng
- Jörg Conradt
date: "2019-01-08T00:00:00Z"
doi: "https://doi.org/10.3390/s19010210"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-02-02T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Sensors 2019, 19*(1), 210"
publication_short: ""

abstract: "Non-invasive, electroencephalography (EEG)-based brain-computer interfaces (BCIs) on motor imagery movements translate the subject’s motor intention into control signals through classifying the EEG patterns caused by different imagination tasks, e.g., hand movements. This type of BCI has been widely studied and used as an alternative mode of communication and environmental control for disabled patients, such as those suffering from a brainstem stroke or a spinal cord injury (SCI). Notwithstanding the success of traditional machine learning methods in classifying EEG signals, these methods still rely on hand-crafted features. The extraction of such features is a difficult task due to the high non-stationarity of EEG signals, which is a major cause by the stagnating progress in classification performance. Remarkable advances in deep learning methods allow end-to-end learning without any feature engineering, which could benefit BCI motor imagery applications. We developed three deep learning models: (1) A long short-term memory (LSTM); (2) a spectrogram-based convolutional neural network model (CNN); and (3) a recurrent convolutional neural network (RCNN), for decoding motor imagery movements directly from raw EEG signals without (any manual) feature engineering. Results were evaluated on our own publicly available, EEG data collected from 20 subjects and on an existing dataset known as 2b EEG dataset from “BCI Competition IV”. Overall, better classification performance was achieved with deep learning models compared to state-of-the art machine learning techniques, which could chart a route ahead for developing new robust techniques for EEG signal decoding. We underpin this point by demonstrating the successful real-time control of a robotic arm using our CNN based BCI."

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
url_pdf: https://www.mdpi.com/1424-8220/19/1/210/pdf
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
  caption: 'Image taken at [**TU Munich**](https://www.tum.de)'
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

