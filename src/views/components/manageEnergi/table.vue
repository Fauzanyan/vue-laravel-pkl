<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Energi</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Manage Energi</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/manage-energi/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="action no-wrap">
                                    <div class="text-center text-center d-flex">
                                        <router-link to="/Pertumbuhan Udang/edit" class="cancel w-50" @click="view_row(props.row)">
                                            <button type="button" class="btn btn-primary btn-sm w-100">Edit</button>
                                        </router-link>
                                        <div class="text-centerc w-50">
                                            <button type="button" class="btn btn-danger btn-sm w-100" data-bs-toggle="modal" data-bs-target="#exampleModalRemoveAnimation">Delete</button>
                                        </div>
                                        <div class="modal" id="exampleModalRemoveAnimation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Hapus Data</h5>
                                                        <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p class="modal-text">Apakah anda yakin ingin menghapus data tersebut?</p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn text-danger" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
                                                        <button type="button" class="btn btn-danger">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Default Order Sorting Table' });

    const columns = ref(['nama_tambak', 'tanggal_input', 'bulan', 'penggunaan_listrik', 'kategori_konsumsi_listrik', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { actions: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['nama_tambak', 'tanggal_input', 'bulan', 'penggunaan_listrik', 'kategori_konsumsi_listrik'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        items.value = [
            {
                id: 1,
                nama_tambak: 'Tiger Nixon',
                tanggal_input: 'System Architect',
                bulan: 'Edinburgh',
                penggunaan_listrik: 61,

                kategori_konsumsi_listrik: '320,800',
            },
            {
                id: 2,
                nama_tambak: 'Garrett Winters',
                tanggal_input: 'Accountant',
                bulan: 'Tokyo',
                penggunaan_listrik: 63,

                kategori_konsumsi_listrik: '170,750',
            },
            {
                id: 3,
                nama_tambak: 'Ashton Cox',
                tanggal_input: 'Junior Technical Author',
                bulan: 'San Francisco',
                penggunaan_listrik: 66,

                kategori_konsumsi_listrik: '86,000',
            },
            {
                id: 4,
                nama_tambak: 'Cedric Kelly',
                tanggal_input: 'Senior Javascript Developer',
                bulan: 'Edinburgh',
                penggunaan_listrik: 22,

                kategori_konsumsi_listrik: '433,060',
            },
            {
                id: 5,
                nama_tambak: 'Airi Satou',
                tanggal_input: 'Accountant',
                bulan: 'Tokyo',
                penggunaan_listrik: 33,

                kategori_konsumsi_listrik: '162,700',
            },
            {
                id: 6,
                nama_tambak: 'Brielle Williamson',
                tanggal_input: 'Integration Specialist',
                bulan: 'New York',
                penggunaan_listrik: 61,

                kategori_konsumsi_listrik: '372,000',
            },
            {
                id: 7,
                nama_tambak: 'Herrod Chandler',
                tanggal_input: 'Sales Assistant',
                bulan: 'San Francisco',
                penggunaan_listrik: 59,

                kategori_konsumsi_listrik: '137,500',
            },
            {
                id: 8,
                nama_tambak: 'Rhona Davbulanon',
                tanggal_input: 'Integration Specialist',
                bulan: 'Tokyo',
                penggunaan_listrik: 55,

                kategori_konsumsi_listrik: '327,900',
            },
            {
                id: 9,
                nama_tambak: 'Colleen Hurst',
                tanggal_input: 'Javascript Developer',
                bulan: 'San Francisco',
                penggunaan_listrik: 39,

                kategori_konsumsi_listrik: '205,500',
            },
            {
                id: 10,
                nama_tambak: 'Sonya Frost',
                tanggal_input: 'Software Engineer',
                bulan: 'Edinburgh',
                penggunaan_listrik: 23,

                kategori_konsumsi_listrik: '103,600',
            },
            {
                id: 11,
                nama_tambak: 'Jena Gaines',
                tanggal_input: 'id Manager',
                bulan: 'London',
                penggunaan_listrik: 30,

                kategori_konsumsi_listrik: '90,560',
            },
            {
                id: 12,
                nama_tambak: 'Quinn Flynn',
                tanggal_input: 'Support Lead',
                bulan: 'Edinburgh',
                penggunaan_listrik: 22,

                kategori_konsumsi_listrik: '342,000',
            },
            {
                id: 13,
                nama_tambak: 'Charde Marshall',
                tanggal_input: 'Regional Director',
                bulan: 'San Francisco',
                penggunaan_listrik: 36,

                kategori_konsumsi_listrik: '470,600',
            },
            {
                id: 14,
                nama_tambak: 'Haley Kennedy',
                tanggal_input: 'Senior Marketing Designer',
                bulan: 'London',
                penggunaan_listrik: 43,

                kategori_konsumsi_listrik: '313,500',
            },
            {
                id: 15,
                nama_tambak: 'Tatyana Fitzpatrick',
                tanggal_input: 'Regional Director',
                bulan: 'London',
                penggunaan_listrik: 19,

                kategori_konsumsi_listrik: '385,750',
            },
            {
                id: 16,
                nama_tambak: 'Michael Silva',
                tanggal_input: 'Marketing Designer',
                bulan: 'London',
                penggunaan_listrik: 66,

                kategori_konsumsi_listrik: '198,500',
            },
            {
                id: 17,
                nama_tambak: 'Paul Byrd',
                tanggal_input: 'Chief Financial idr (CFO)',
                bulan: 'New York',
                penggunaan_listrik: 64,

                kategori_konsumsi_listrik: '725,000',
            },
            {
                id: 18,
                nama_tambak: 'Gloria Little',
                tanggal_input: 'Systems Administrator',
                bulan: 'New York',
                penggunaan_listrik: 59,

                kategori_konsumsi_listrik: '237,500',
            },
            {
                id: 19,
                nama_tambak: 'Bradley Greer',
                tanggal_input: 'Software Engineer',
                bulan: 'London',
                penggunaan_listrik: 41,

                kategori_konsumsi_listrik: '132,000',
            },
            {
                id: 20,
                nama_tambak: 'Dai Rios',
                tanggal_input: 'Personnel Lead',
                bulan: 'Edinburgh',
                penggunaan_listrik: 35,

                kategori_konsumsi_listrik: '217,500',
            },
            {
                id: 21,
                nama_tambak: 'Jenette Caldwell',
                tanggal_input: 'Development Lead',
                bulan: 'New York',
                penggunaan_listrik: 61,

                kategori_konsumsi_listrik: '345,000',
            },
            {
                id: 22,
                nama_tambak: 'Yuri Berry',
                tanggal_input: 'Chief Marketing idr (CMO)',
                bulan: 'New York',
                penggunaan_listrik: 40,

                kategori_konsumsi_listrik: '675,000',
            },
            {
                id: 23,
                nama_tambak: 'Caesar Vance',
                tanggal_input: 'Pre-Sales Support',
                bulan: 'New York',
                penggunaan_listrik: 21,

                kategori_konsumsi_listrik: '106,450',
            },
            {
                id: 24,
                nama_tambak: 'Doris Wilder',
                tanggal_input: 'Sales Assistant',
                bulan: 'Sidney',
                penggunaan_listrik: 23,

                kategori_konsumsi_listrik: '85,600',
            },
            {
                id: 25,
                nama_tambak: 'Angelica Ramos',
                tanggal_input: 'Chief Executive idr (CEO)',
                bulan: 'London',
                penggunaan_listrik: 47,

                kategori_konsumsi_listrik: '1,200,000',
            },
            {
                id: 26,
                nama_tambak: 'Gavin Joyce',
                tanggal_input: 'Developer',
                bulan: 'Edinburgh',
                penggunaan_listrik: 42,

                kategori_konsumsi_listrik: '92,575',
            },
            {
                id: 27,
                nama_tambak: 'Jennifer Chang',
                tanggal_input: 'Regional Director',
                bulan: 'Singapore',
                penggunaan_listrik: 28,

                kategori_konsumsi_listrik: '57,650',
            },
        ];
    };

    const view_row = (item) => {
        alert('bulan: ' + item.id + ', Name: ' + item.nama_tambak);
    };
</script>